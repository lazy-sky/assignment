import axios from 'axios'

const baseUrl = 'https://api.github.com/repos/angular/angular-cli'

export const getIssues = async (page: number = 1) => {
  const { data } = await axios.get(`${baseUrl}/issues?page=${page}`)

  return { data, nextPage: page + 1 }
}

export const getIssueByNumber = async (issueNumber: number) => {
  const { data } = await axios.get(`${baseUrl}/issues/${issueNumber}`)

  return data
}
