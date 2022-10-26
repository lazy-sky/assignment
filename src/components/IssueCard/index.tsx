import { Link } from 'react-router-dom'
import { IIssue } from 'types/issue'
import { formatDate } from 'utils/formatter'

import style from './issueCard.module.scss'

interface IProps {
  issue: IIssue
}

const IssueCard = ({ issue }: IProps) => {
  return (
    <li className={style.issueCard}>
      <Link to={`/${issue.number}`}>
        <div className={style.top}>
          <div className={style.left}>
            <div>#{issue.number}</div>
            <div>{issue.title}</div>
          </div>
          <div className={style.comments}>코멘트: {issue.comments}</div>
        </div>
        <div className={style.bottom}>
          <div>작성자: {issue.user.login},</div>
          <div>작성일: {formatDate(issue.created_at)}</div>
        </div>
      </Link>
    </li>
  )
}

export default IssueCard
