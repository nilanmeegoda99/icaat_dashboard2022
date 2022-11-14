import API from './api'

export const getReasoningIQScores = async () => {
  console.log('Child id is', localStorage.getItem('candidateID'))
  const childId = localStorage.getItem('candidateID')
  const headerConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS'
    }
  }
  let resoningIQSocres: any
  let scores: any
  await API.get('resoningIQSocres/', headerConfig)
    .then((response) => {
      resoningIQSocres = response.data
      scores = resoningIQSocres.filter((obj: { candidateID: string }) => {
        return obj.candidateID === childId
      })
      console.log('Reasoning IQ scores', resoningIQSocres)
      console.log('Reasoning IQ scores2', scores)
    })
    .catch((err) => {
      console.log(err.message)
    })
  return scores
}
