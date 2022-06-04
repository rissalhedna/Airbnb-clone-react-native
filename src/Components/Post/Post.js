import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import airbnb1 from '../../../assets/Images/airbnb1.jpg'

const Post = ({post}) => { 

  return (
    //   a vew that containes all of our posts
    <View style = {styles.container}>

      {/* Imgae */}
        <Image style = {styles.image}
            source = {{uri: post.image}}/>

      {/* Bed and bedroom */}
        <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
        </Text>

      {/* Type and description */}
        <Text style = {styles.description} numberOfLines={2}>
            {post.type}. {post.title}.
        </Text>

      {/* Old price and new price */}
        <Text style = {styles.prices}>
            <Text style = {styles.oldPrice}>${post.oldPrice}</Text>
            <Text style = {styles.newPrice}>  ${post.newPrice} </Text>
            <Text>/ night</Text>
        </Text>

      {/* total price */}
        <Text style = {styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'95%',
    },
    image:{
        width:'100%',
        height:300,
        resizeMode:'cover',
        borderRadius:10,
        
    },
    prices:{
        fontSize:18,
        marginVertical:5
    },
    oldPrice:{
        color:'grey',
        textDecorationLine:'line-through',
    },
    newPrice:{
        fontWeight:'bold',
        
    },
    totalPrice:{
        textDecorationLine:'underline',
        color:'grey',
        marginBottom:20,
    },
    description:{
        fontSize:18,
        lineHeight:25,

    },
    bedrooms:{
        marginVertical:10,
        color:'grey',
        
    },
})

export default Post