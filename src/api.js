import API from 'fetch-api'

const api = new API({
  baseURI: 'http://localhost:3000'
})

export const fetchContactsList = (cache, callback) => api.get('/get-contacts-list', (err, res, data) => {
  if (err) {
    throw err
  }
  if (!cache) {
    localStorage.setItem('contactsList', data)
  }
  if (typeof callback === 'function') {
    callback(JSON.parse(localStorage.getItem('contactsList')))
  }
})
