import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import VotingStep from './votingStep'
import Results from './results'
import places from './places'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPlaces: [],
    }
  }

  getRandomPlaces = () => {
    const currentPlaces = []
    let count = 0

    while (count < 4) {
      const randomPlace = places[Math.floor(Math.random() * places.length)]
      const notAdded =
        !this.state.selectedPlaces.includes(randomPlace.id) && !currentPlaces.includes(randomPlace)

      if (notAdded) {
        currentPlaces.push(randomPlace)
        count++
      }
    }
    return currentPlaces
  }

  voteForItem = itemId => {
    return fetch(`https://nameless-depths-10115.herokuapp.com/vote/${itemId}`, {
      method: 'POST',
    })
      .then(response => {
        return response.json()
      })
      .catch(error => {
        console.error(error)
      })
  }

  setSelectedPlace = item => {
    this.setState({
      selectedPlaces: [...this.state.selectedPlaces, item.id],
    })
    return this.voteForItem(item.id)
  }

  render() {
    const { selectedPlaces } = this.state
    const places = this.getRandomPlaces()

    if (selectedPlaces.length === 4) {
      return <Results selectedPlaces={selectedPlaces} />
    }
    return <VotingStep places={places} onItemSelected={this.setSelectedPlace} />
  }
}

export default App
