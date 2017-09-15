import React,{ Component } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'

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

const VotingStep = ({ places, setSelected }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Vote for summit destination</Text>
      <FlatList
        data={places}
        numColumns={2}
        scrollEnabled={false}
        renderItem={({ item }) => renderItem(item, () => setSelected(item))}
        keyExtractor={(item, index) => item.id}
      />
    </View>)
}

export default VotingStep
