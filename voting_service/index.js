const express = require('express')
const app = express()

let votes = {
  0: {
    votes: 0,
    title: 'Slovakia',
  },
  1: {
    votes: 0,
    title: 'Svalbard',
  },
  2: {
    votes: 0,
    title: 'Austria',
  },
  3: {
    votes: 0,
    title: 'Iceland',
  },
  4: {
    votes: 0,
    title: 'Estonia',
  },
  5: {
    votes: 0,
    title: 'Malta',
  },
  6: {
    votes: 0,
    title: 'Tunisia',
  },
  7: {
    votes: 0,
    title: 'Hungary',
  },
  8: {
    votes: 0,
    title: 'Turkey',
  },
  9: {
    votes: 0,
    title: 'Algeria',
  },
  10: {
    votes: 0,
    title: 'Moldova',
  },
  11: {
    votes: 0,
    title: 'Bulgaria',
  },
  12: {
    votes: 0,
    title: 'Greece',
  },
  13: {
    votes: 0,
    title: 'Netherlands',
  },
  14: {
    votes: 0,
    title: 'Czechoslovakia',
  },
  15: {
    votes: 0,
    title: 'Belgium',
  }
}

app.get('/', function (req, res) {
  res.send('I am your super simple voting service! :)')
}).get('/results', function (req, res) {
  res.send(votes)
}).post('/vote/:id', function(req, res){
  const id = req.params.id
  if(votes[id]){
    votes[id].votes++
    res.send(votes[id])
  } else {
    res.send('Bad ID')
  }
})

app.listen(3000, function () {
  console.log('Voting app listening on port 3000!')
})
