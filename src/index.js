import React,{ Component } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
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
  listItem: {
    marginHorizontal: 2,
    marginBottom: 5,
  },
})

const renderItem = (item, setSelected) => (
  <TouchableOpacity id={item.id} onPress={setSelected} style={styles.listItem}>
    <Image source={{ uri: item.imageUrl }} style={{ width: 175, height: 175 }} />
    <Text>{item.title}</Text>
  </TouchableOpacity>
)

// TODO: Make sure not to have duplicates across voting rounds
const getRandomPlaces = selectedPlaces => {
  const currentPlaces = []
  let count = 0

  while (count < 4) {
    const randomPlace = places[Math.floor(Math.random() * places.length)]
    currentPlaces.push(randomPlace)
    count++
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
  setSelected(item) {
    this.setState({
      selectedPlaces: [...this.state.selectedPlaces, item.id],
      numberOfVotes: this.state.numberOfVotes + 1,
    })
  }

  render() {
    const {selectedPlaces, numberOfVotes} = this.state
    if (numberOfVotes === 4) {
      // TODO: Move to separate component
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Thanks for voting!</Text>
          <Text>You selected the following destinations:</Text>
          {selectedPlaces.map(id => {
            return(<Text>{places[id].title}</Text>)
          })}
        </View>
      )
    }
    // TODO: Move to separate component
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Vote for summit destination</Text>
        <FlatList
          data={getRandomPlaces()}
          numColumns={2}
          scrollEnabled={false}
          renderItem={({ item }) => renderItem(item, () => this.setSelected(item))}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    )
  }
}

export default App
