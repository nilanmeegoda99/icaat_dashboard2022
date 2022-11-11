import API from './api'

export const getInstitutes = async () => {
  const headerConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  }
  let institutes: any
  await API.get('users/', headerConfig)
    .then((response) => { institutes = response.data })
    .catch((err) => {
      console.log(err.message)
    })
  return institutes
}
