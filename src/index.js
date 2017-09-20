import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import VotingStep from './votingStep'
import places from './places'
import Results from './results'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
})

const getRandomPlaces = selectedPlaces => {
  const currentPlaces = []
  let count = 0

  while(count < 4) {
    const randomPlace = places[Math.floor(Math.random() * places.length)]
    const notAdded = !selectedPlaces.includes(randomPlace)
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

  // TODO: Animations between votingSteps
  setSelected = item => {
    this.setState({
      selectedPlaces: [...this.state.selectedPlaces, item.id],
      numberOfVotes: this.state.numberOfVotes + 1,
    })
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
