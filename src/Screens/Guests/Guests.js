import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import GuestComponent from '../../Components/GuestComponent'
import { useNavigation } from '@react-navigation/native'
const Guests = () => {
  const navigation = useNavigation()
  return (

    <>
      <Text style={{width:'100%',backgroundColor:'white',paddingTop:50,paddingLeft:10,paddingBottom:10, color:'blue', fontWeight:'bold', width:'100%'}} onPress={()=>navigation.navigate("DestinationSearch")}>{"< Back"}</Text>
      <View style = {styles.container}>
      
        <View>
          <GuestComponent type={'Adults'} desc={'Ages 13 or older'}/>
          <GuestComponent type={'Children'} desc={'Ages 2 to 12'}/>
          <GuestComponent type={'Infants'} desc={'Under 2'}/>
        </View>

        <Pressable onPress={()=>console.warn("Search")} style={styles.searchButton}>
          <Text style={styles.buttonText}>Search</Text>
        </Pressable>
      
    </View>
    </>

  )
}

const styles = StyleSheet.create({
    container:{
        width:'90%',
        alignSelf:'center',
        top:30,
        height:'75%',
        justifyContent:'space-between'
    },
    searchButton:{
      backgroundColor:'green',
      alignItems:'center',
      justifyContent:'center',
      padding:15,
      borderRadius:10,
      width:'70%',
      alignSelf:'center',
    },
    buttonText:{
      color:'white',
      fontWeight:'bold',
      fontSize:16
    },
})
export default Guests