import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import VotingItem from './votingItem'

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

const VotingStep = ({ places, onItemSelected }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Vote for summit destination</Text>
    <FlatList
      data={places}
      numColumns={2}
      scrollEnabled={false}
      renderItem={({ item }) => <VotingItem item={item} onPress={() => onItemSelected(item)} />}
      keyExtractor={(item, index) => item.id}
    />
  </View>
)

VotingStep.propTypes = {
  places: PropTypes.array.isRequired,
  onItemSelected: PropTypes.func.isRequired,
}

export default VotingStep
