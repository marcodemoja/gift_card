import API from 'fetch-api'

const api = new API({
  baseURI: 'http://localhost:3000'
})


export const fetchContactsList = (callback) => api.get('/get-contacts-list', (err, res, data) => {
  if (err)
    throw err
  if (typeof callback == 'function') {
    callback(JSON.parse(data))
  } else
    console.log(data, 'data fetched')
})
