import { View, Text, Image, StyleSheet } from 'react-native'
import Home from '../Screens/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchIcon from '../../assets/Images/searchicon.png'

import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} tabBarOptions={{activeTintColor:"#f15454"}} >
        <Tab.Screen name = {"Explore"} component={Home} options={{tabBarIcon: ({color})=>{
            return <Fontisto name="search" size={25} color={color} /> 
        }}}/>
        <Tab.Screen name = {"Rate"} component={Home} options={{tabBarIcon: ({color})=>{
            return <FontAwesome name="heart-o" size={25} color={color} /> 
        }}}/>
        <Tab.Screen name = {"Airbnb"} component={Home} options={{tabBarIcon: ({color})=>{
            return <FontAwesome5 name="airbnb" size={25} color={color} /> 
        }}}/>
        <Tab.Screen name = {"Messages"} component={Home} options={{tabBarIcon: ({color})=>{
            return <Feather name="message-square" size={25} color={color} />
        }}}/>
        <Tab.Screen name = {"Profile"} component={Home} options={{tabBarIcon: ({color})=>{
            return <EvilIcons name="user" size={25} color={color} />
        }}}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabIcon:{
        
        
    }
})

export default HomeTabNavigator