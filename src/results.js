import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, Easing, Image } from 'react-native'
import PropTypes from 'prop-types'

import places from './places'

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
  results: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
})

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      results: [],
      spinValue: new Animated.Value(0),
    }
  }

  fetchResults = () => {
    return fetch('https://nameless-depths-10115.herokuapp.com/results')
      .then(response => response.json())
      .then(responseJson => {
        responseJson = responseJson.sort((a, b) => b.votes - a.votes)
        // Could hide loader right here, but might be more fun to show it for 6s?
        setTimeout(() => this.setState({ isLoading: false }), 5000)
        return this.setState({ results: responseJson })
      })
      .catch(error => {
        console.error(error)
      })
  }

  spin() {
    const { spinValue } = this.state
    spinValue.setValue(0)
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
    }).start(() => this.spin())
  }

  componentDidMount() {
    this.spin()
    this.fetchResults()
  }

  render() {
    const { selectedPlaces } = this.props
    const { isLoading, results, spinValue } = this.state
    if (isLoading) {
      const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-360deg'],
      })
      return (
        <View style={styles.animationContainer}>
          <Animated.Image
            style={{
              width: 64,
              height: 64,
              transform: [{ rotate: spin }],
            }}
            source={require('./assets/world.png')}
          />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Thanks for voting!</Text>
        <Text>You voted on the following destinations:</Text>
        {selectedPlaces.map(id => <Text key={places[id].id}>{places[id].title}</Text>)}
        <Text style={styles.results}>Current results</Text>
        {results.map(place => (
          <Text key={place.id}>
            {place.title} ({place.votes})
          </Text>
        ))}
      </View>
    )
  }
}

Results.propTypes = {
  selectedPlaces: PropTypes.array.isRequired,
}

export default Results
