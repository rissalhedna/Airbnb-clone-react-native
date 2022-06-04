import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import GuestComponent from '../../Components/GuestComponent'
const Guests = () => {

  return (
    <View style = {styles.container}>
      <GuestComponent type={'Adults'} desc={'Ages 13 or older'}/>
      <GuestComponent type={'Children'} desc={'Ages 2 to 12'}/>
      <GuestComponent type={'Infants'} desc={'Under 2'}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'80%',
    }
})
export default Guests