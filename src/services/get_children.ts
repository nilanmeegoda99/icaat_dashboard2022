import API from './api'

export const getChildren = async () => {
  const headerConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  }
  let children: any
  await API.get('users/', headerConfig)
    .then((response) => { children = response.data })
    .catch((err) => {
      console.log(err.message)
    })
  return children
}
