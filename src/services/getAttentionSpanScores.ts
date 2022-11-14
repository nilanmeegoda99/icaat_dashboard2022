import API from './api'

export const getAttentionSpanIQScores = async () => {
  console.log('Child id is', localStorage.getItem('candidateID'))
  const childId = localStorage.getItem('candidateID')
  const headerConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS'
    }
  }
  let attentionSpanScores: any
  let scores: any
  await API.get('attentionSpanScores/', headerConfig)
    .then((response) => {
      attentionSpanScores = response.data
      scores = attentionSpanScores.filter((obj: { candidateID: string }) => {
        return obj.candidateID === childId
      })
    })
    .catch((err) => {
      console.log(err.message)
    })
  return scores
}
