import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { IIssue } from 'types/issue'
import { getIssueByNumber } from 'services/data'
import IssueCard from 'components/IssueCard'

import style from './detail.module.scss'

const Detail = () => {
  const params = useParams()
  const { issueNumber } = params

  const { isError, isLoading, data } = useQuery<IIssue>(['issues'], () => getIssueByNumber(Number(issueNumber)), {
    retry: 1,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div className={style.detail}>
      <div className={style.top}>
        <img src={data.user.avatar_url} alt='user profile' />
        <IssueCard issue={data} />
      </div>
      <section>{data.body}</section>
    </div>
  )
}

export default Detail
