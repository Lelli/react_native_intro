import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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

// TODO: Consider results to be saved/fetched from API
const Results = ({ selectedPlaces, places }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Thanks for voting!</Text>
    <Text>You selected the following destinations:</Text>
    {selectedPlaces.map(id => {
      return <Text>{places[id].title}</Text>
    })}
  </View>
)

export default Results
