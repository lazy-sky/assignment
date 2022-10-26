import { Fragment, useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'

import { IIssue } from 'types/issue'
import { getIssues } from 'services/data'
import IssueCard from 'components/IssueCard'
import FetchingStatus from 'components/FetchingStatus'

import style from './home.module.scss'

const Home = () => {
  const { isError, isLoading, fetchNextPage, data } = useInfiniteQuery(
    ['issues'],
    ({ pageParam }) => getIssues(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
      retry: 1,
    }
  )

  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [fetchNextPage, inView])

  if (isLoading) {
    return <FetchingStatus status='loading' />
  }

  if (isError) {
    return <FetchingStatus status='error' />
  }

  if (data.pages[0].data.length === 0) {
    return (
      <div className={style.home}>
        <div className={style.noData}>No Issues</div>
      </div>
    )
  }

  return (
    <div className={style.home}>
      <ul>
        {data.pages[0].data.length &&
          data.pages.map((page, pageIndex) => {
            const pageKey = `page-${pageIndex}`

            return (
              <Fragment key={pageKey}>
                {page.data.map((issue: IIssue, index: number) => {
                  if (pageIndex === 0 && index === 4) {
                    return (
                      <li key={issue.number} ref={ref}>
                        <a href='https://thingsflow.com/ko/home' target='_blank' rel='noreferrer' className={style.ad}>
                          <img src='https://via.placeholder.com/500x150?text=ad' alt='advertisement' />
                        </a>
                        <IssueCard issue={issue} />
                      </li>
                    )
                  }

                  return (
                    <li key={issue.number} ref={ref}>
                      <IssueCard issue={issue} />
                    </li>
                  )
                })}
              </Fragment>
            )
          })}
      </ul>
    </div>
  )
}

export default Home
