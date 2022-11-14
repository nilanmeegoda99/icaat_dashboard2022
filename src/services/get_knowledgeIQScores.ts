import API from './api'

export const getKnowledgeIQScores = async () => {
  console.log('Child id is', localStorage.getItem('candidateID'))
  const childId = localStorage.getItem('candidateID')
  const headerConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS'
    }
  }
  let knowledgeIQScores: any
  let scores: any
  // await API.get('knowledgeIQScores', headerConfig)
  await API.get('knowledgeIQScores/', headerConfig)
    .then((response) => {
      knowledgeIQScores = response.data
      scores = knowledgeIQScores.filter((obj: { candidateID: string }) => {
        return obj.candidateID === childId
      })
      console.log('Knowledge IQ scores', knowledgeIQScores)
      console.log('Knowledge IQ scores2', scores)
    })
    .catch((err) => {
      console.log(err.message)
    })
  return scores
}
