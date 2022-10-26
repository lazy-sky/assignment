export interface IIssue {
  number: number
  title: string
  user: {
    login: string
    avatar_url: string
  }
  created_at: string
  comments: number
  body: string
}
