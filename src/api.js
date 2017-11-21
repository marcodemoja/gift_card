import API from 'fetch-api'

const api = new API({
  baseURI: 'http://localhost:3000'
})

export const fetchContactsList = (callback, filter) => api.get('/get-contacts-list', (err, res, data) => {
  if (err)
    throw err
  localStorage.setItem('contactsList', data)

  if (typeof callback === 'function') {
    if (filter) callback(filter)
    else callback()
  }
})
