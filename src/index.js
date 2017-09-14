import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'

const places = [
  {
    id: 1,
    imageUrl:
      'https://lonelyplanetwp.imgix.net/2015/12/bratislava-castle-150-cs.jpg?crop=entropy&fit=crop&h=421&sharp=10&vib=20&w=748',
    title: 'Bratislava',
  },
  {
    id: 2,
    imageUrl:
      'https://www.polar-quest.com/media/1539/copyright_adam-rheborg-1.jpg?rnd=636150747260000000&crop=0,0,0,0&cropmode=percentage&center=0.78909612625538017,0.63560732113144758&width=1600&height=666&mode=crop&upscale=false&quality=84',
    title: 'Svalbard',
  },
  {
    id: 3,
    imageUrl:
      'https://lonelyplanetimages.imgix.net/mastheads/stock-photo-st-stephens-church-112868985.jpg?sharp=10&vib=20&w=1200',
    title: 'Vienna',
  },
  {
    id: 4,
    imageUrl:
      'https://www.trafalgar.com/~/media/images/website-refresh/hero/bestofirelandandscotland-hero-77898443.jpg?mw=1200&',
    title: 'Scotland',
  },
  {},
]

const styles = StyleSheet.create({
  container: {
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

const renderItem = item => (
  <TouchableOpacity id={item.id} onPress={() => console.log('Selected')} style={styles.listItem}>
    <Image source={{ uri: item.imageUrl }} style={{ width: 175, height: 175 }} />
    <Text>{item.title}</Text>
  </TouchableOpacity>
)

export default (App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vote for summit destination</Text>
      <FlatList
        data={places}
        numColumns={2}
        scrollEnabled={false}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  )
})
