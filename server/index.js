const express = require('express')
const app = express()
const path = require('path')
const request = require('request')

app.use('/public', express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/get-contacts-list', (req, res) => {
  request('https://retailer.clevergift.com/tests/2/contacts.json', (err, data) => {
    res.json(data.body)
  })
})



app.listen(3000, () => console.log('server is running on port 3000!'))
