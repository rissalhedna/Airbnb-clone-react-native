import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import airbnb1 from '../../../assets/Images/airbnb1.jpg'
const Post = () => { 
  return (
    //   a vew that containes all of our posts
    <View style = {styles.container}>

      {/* Imgae */}
        <Image style = {styles.image}
            source = {airbnb1}/>
      {/* Bed and bedroom */}
        <Text style={styles.bedrooms}>
            1 bed 1 bedroom
        </Text>
      {/* Type and description */}
        <Text style = {styles.description} numberOfLines={2}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis aperiam odio accusantium aut, nulla nostrum porro minus nesciunt fugiat nobis esse suscipit placeat alias veritatis totam? Nesciunt quam cupiditate nemo!    
        </Text>
      {/* Old price and new price */}
        <Text style = {styles.prices}>
            <Text style = {styles.oldPrice}>$36</Text>
            <Text style = {styles.newPrice}>  $30 </Text>
            <Text>/ night</Text>
        </Text>
      {/* total price */}
        <Text style = {styles.totalPrice}>$230 total</Text>
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
        marginVertical:10
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
        color:'grey'
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