import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 2,
    marginBottom: 5,
  },
})

const VotingItem = ({ item, setSelected }) => (
  <TouchableOpacity id={item.id} onPress={setSelected} style={styles.listItem}>
    <Image source={{ uri: item.imageUrl }} style={{ width: 175, height: 175 }} />
    <Text>{item.title}</Text>
  </TouchableOpacity>
)

export default VotingItem
