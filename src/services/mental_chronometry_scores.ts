import API from './api'

export const getmentalChronometryScrores = async () => {
  console.log('Child id is', localStorage.getItem('candidateID'))
  const childId = localStorage.getItem('candidateID')
  const headerConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS'
    }
  }
  let MentalChronometryScores: any
  let scores: any
  // await API.get('mentalChronometryScores', headerConfig)
  await API.get('mentalChronometryScores/', headerConfig)
    .then((response) => {
      MentalChronometryScores = response.data
      scores = MentalChronometryScores.filter((obj: { candidateID: string }) => {
        return obj.candidateID === childId
      })
      console.log('Mental chron scores', scores)
    })
    .catch((err) => {
      console.log(err.message)
    })
  return scores
}
