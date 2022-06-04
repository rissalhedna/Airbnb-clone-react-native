import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import feed from '../../../assets/Data/feed'
import Post from '../../Components/Post'


const SearchResults = () => {
  return (
    <View style= {styles.container}>
      <FlatList
      
        syle = {styles.list}
        data={feed}
        renderItem={({item})=> <Post post={item}/> }>

      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginLeft:15,
    }
})
export default SearchResults