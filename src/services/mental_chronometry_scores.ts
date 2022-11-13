import API from './api'

export const getmentalChronometryScrores = async (childId: string) => {
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
    })
    .catch((err) => {
      console.log(err.message)
    })
  return scores
}
