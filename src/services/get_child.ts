import API from './api'

export const getChild = async () => {
  console.log('Child id is', localStorage.getItem('candidateID'))
  const childId = localStorage.getItem('candidateID')
  const headerConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  }
  let Children: any
  let Child: any
  await API.get('users/', headerConfig)
    .then((response) => {
      Children = response.data
      Child = Children.filter((obj: { id: string }) => {
        return obj.id === childId
      })
      console.log('Child date', Child)
    })
    .catch((err) => {
      console.log(err.message)
    })
  return Child
}
