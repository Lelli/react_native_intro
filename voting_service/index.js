const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('I am your super simple voting service! :)')
})

app.listen(3000, function () {
  console.log('Voting app listening on port 3000!')
})
