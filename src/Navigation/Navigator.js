import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home'
import SearchResults from '../Screens/SearchResults'
import DestinationSearch from '../Screens/DestinationSearch'
import Guests from '../Screens/Guests'
import HomeTabNavigator from './HomeTabNavigator'
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={"HomeTabNavigator"} component={HomeTabNavigator}/>
        <Stack.Screen name={"Guests"} component={Guests} />
        <Stack.Screen name={"DestinationSearch"} component={DestinationSearch} />
        <Stack.Screen name={"SearchResults"} component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator