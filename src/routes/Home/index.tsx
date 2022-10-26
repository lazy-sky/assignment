import { useQuery } from '@tanstack/react-query'

import { IIssue } from 'types/issue'
import { getIssues } from 'services/data'
import IssueCard from 'components/IssueCard'

import style from './home.module.scss'

const Home = () => {
  const { isError, isLoading, data } = useQuery<IIssue[]>(['issues'], () => getIssues(), {
    retry: 1,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div className={style.home}>
      <ul>
        {data.map((issue, index) => {
          if (index === 4) {
            return (
              <a href='https://thingsflow.com/ko/home' target='_blank' rel='noreferrer' className={style.ad}>
                <img src='https://via.placeholder.com/500x150?text=ad' alt='advertisement' />
              </a>
            )
          }

          return <IssueCard key={issue.number} issue={issue} />
        })}
      </ul>
    </div>
  )
}

export default Home
