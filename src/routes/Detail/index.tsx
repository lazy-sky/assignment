import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'

import { IIssue } from 'types/issue'
import { getIssueByNumber } from 'services/data'
import IssueCard from 'components/IssueCard'

import style from './detail.module.scss'

const Detail = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { issueNumber } = params

  const { isError, isLoading, data } = useQuery<IIssue>(
    ['issue', { number: issueNumber }],
    () => getIssueByNumber(Number(issueNumber)),
    {
      retry: 1,
    }
  )

  const handleBackClick = () => {
    navigate(-1)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div className={style.detail}>
      <button type='button' onClick={handleBackClick} className={style.backBtn}>
        뒤로 가기
      </button>
      <div className={style.top}>
        <img src={data.user.avatar_url} alt='user profile' />
        <IssueCard issue={data} />
      </div>
      <section>{data.body}</section>
    </div>
  )
}

export default Detail
