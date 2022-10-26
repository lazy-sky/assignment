import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'
import DOMPurify from 'dompurify'
import { marked } from 'marked'

import { IIssue } from 'types/issue'
import { getIssueByNumber } from 'services/data'
import IssueCard from 'components/IssueCard'
import FetchingStatus from 'components/FetchingStatus'

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
    return <FetchingStatus status='loading' />
  }

  if (isError) {
    return <FetchingStatus status='error' />
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
      <section
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked.parse(data.body)),
        }}
        className={style.content}
      />
    </div>
  )
}

export default Detail
