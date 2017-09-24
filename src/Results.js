import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animation from 'lottie-react-native'

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

// TODO: Consider results to be saved/fetched from API
class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLoader: true,
    }
  }

  componentDidMount() {
    this.animation.play()
    setTimeout(() => this.setState({ showLoader: false }), 6000)
  }

  render() {
    const { selectedPlaces, places } = this.props
    if (this.state.showLoader) {
      return (
        <View style={styles.animationContainer}>
          <View style={styles.animation}>
            <Animation
              ref={ref => (this.animation = ref)}
              style={{
                width: 200,
                height: 200,
              }}
              source={require('./assets/Plane.json')}
              loop={true}
            />
          </View>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Thanks for voting!</Text>
        <Text>You selected the following destinations:</Text>
        {selectedPlaces.map(id => {
          return <Text key={places[id].id}>{places[id].title}</Text>
        })}
      </View>
    )
  }
}

export default Results
