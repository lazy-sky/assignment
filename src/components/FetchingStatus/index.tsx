import styles from './fetchingStatus.module.scss'

interface IProps {
  status: string
}

const FetchingStatus = ({ status }: IProps) => {
  if (status === 'loading') {
    return (
      <div className={styles.wrapper}>
        <div className={styles.loadingSpinner} />
      </div>
    )
  }

  if (status === 'error') {
    return <div className={styles.wrapper}>No Issues Available</div>
  }

  return <div className={styles.wrapper}>...</div>
}

export default FetchingStatus
