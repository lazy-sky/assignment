import dayjs from 'dayjs'

export const formatDate = (date: string | null, format: string = 'YYYY년 MM월 DD일') => {
  if (!date) return ''

  return dayjs(date).format(format)
}
