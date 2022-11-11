import API from './api'

export const getChild = async () => {
  const headerConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  }
  let Child: any
  await API.get('users/', headerConfig)
    .then((response) => { Child = response.data })
    .catch((err) => {
      console.log(err.message)
    })
  return Child
}
