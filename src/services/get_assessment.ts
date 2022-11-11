import API from './api'

export const getAssessmentDetails = async () => {
  const headerConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  }
  let AssessmentDetails: any
  await API.get('users/', headerConfig)
    .then((response) => { AssessmentDetails = response.data })
    .catch((err) => {
      console.log(err.message)
    })
  return AssessmentDetails
}
