import axios from 'axios'

const baseUrl = 'https://api.github.com/repos/angular/angular-cli'

export const getIssues = async () => {
  const { data } = await axios.get(`${baseUrl}/issues`)

  return data
}

export const getIssueByNumber = async (issueNumber: number) => {
  const { data } = await axios.get(`${baseUrl}/issues/${issueNumber}`)

  return data
}
