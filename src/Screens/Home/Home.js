import { View,
    Text,
    ImageBackground,
    StyleSheet,
    Pressable,
    Image
    } from 'react-native'
import React from 'react'
import Background from '../../../assets/Images/background.jpg'
import searchIcon from '../../../assets/Images/searchicon.png'
const Home = (props) => {
  return (
    <View style = {styles.container}>
        {/* Search button */}
        <Pressable style = {styles.searchbtn} onPress={()=>alert("Search Clicked")}>
                <Image style = {styles.searchbtnimage} source={searchIcon}></Image>
                <Text style = {styles.searchbtntext}>Where are you going?</Text>
        </Pressable>

        {/* Background image */}
      <ImageBackground resizeMode='cover' source = {Background} style={styles.image}>
            <Text style = {styles.title}>
                Go near
            </Text>

            {/* Explore button */}
            <Pressable style = {styles.button} onPress={()=>alert("Btn Clicked")}>
                <Text style = {styles.btntext}>Explore nearby places</Text>
            </Pressable>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'65%',
    },
    image:{
        width:'100%',
        height:500,
        justifyContent:'center',
        // alignItems:'center',
    },
    title:{

        fontSize:80,
        fontWeight:'bold',
        color:'white',
        width:'60%',
        marginLeft:25,

    },
    button:{
        backgroundColor:'white',
        padding:15,
        width:250,
        borderRadius:5, 
        // borderColor:'#b7726b',
        // borderWidth:2,
        margin:20,
        alignItems:'center',
        justifyContent:'center',
        
    },
    btntext:{
        fontSize:20,
        color:'#b7726b',
        fontWeight:'bold'
    },
    
    searchbtn:{
        backgroundColor:'white',
        padding:15,
        width:'90%',
        borderRadius:50, 
        // borderColor:'#b7726b',
        // borderWidth:2,
        alignItems:'left',
        justifyContent:'center',
        flexDirection:'row',
        alignSelf:'center',
        height:50,
        borderWidth:2,
        borderColor:'#b7726b',
        marginBottom:10,
        position:'absolute',
        zIndex:100,
        top:20,
    },
    searchbtntext:{
        marginRight:'auto',
        marginLeft:30,
    },
    searchbtnimage:{
        width:35,
        height:19,
        resizeMode:'contain',
        borderRightColor:'#b7726b',
        borderRightWidth:1,
    },
})
export default Home