import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animation from 'lottie-react-native'

import VotingStep from './votingStep'
import places from './places'
import Results from './results'

const getRandomPlaces = selectedPlaces => {
  const currentPlaces = []
  let count = 0

  while (count < 4) {
    const randomPlace = places[Math.floor(Math.random() * places.length)]
    const notAdded =
      !selectedPlaces.includes(randomPlace.id) && !currentPlaces.includes(randomPlace)
    if (notAdded) {
      currentPlaces.push(randomPlace)
      count++
    }
  }
  return currentPlaces
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPlaces: [],
      numberOfVotes: 0,
    }
  }

  voteForItem = itemId => {
    return fetch('http://localhost:3000/vote/'+itemId, {method: 'POST'})
       .then((response) => {
         return response.json()
       })
       .catch((error) => {
         console.error(error)
       });
  }

  // TODO: Animations between votingSteps
  setSelected = item => {
    this.setState({
      selectedPlaces: [...this.state.selectedPlaces, item.id],
      numberOfVotes: this.state.numberOfVotes + 1,
    })
    return this.voteForItem(item.id)
  }

  render() {
    const { selectedPlaces, numberOfVotes } = this.state
    if (numberOfVotes === 4) {
      return <Results selectedPlaces={selectedPlaces} places={places} />
    }
    return <VotingStep places={getRandomPlaces(selectedPlaces)} setSelected={this.setSelected} />
  }
}

export default App
