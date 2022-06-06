import { View, Text , StyleSheet, TextInput, FlatList, Image, Pressable} from 'react-native'
import React , {useState} from 'react'
import searchResults from '../../../assets/Data/search'
import LocIcon from '../../../assets/Images/loc.png'
import { useNavigation } from '@react-navigation/native'

const DestinationSearch = () => {

    const navigation = useNavigation();
    const [inputText, setInputText] = useState("");

  return (

    <>
        <Text style={{width:'100%',backgroundColor:'white',paddingTop:50,paddingLeft:10,paddingBottom:10, color:'blue', fontWeight:'bold', width:'100%'}} onPress={()=>navigation.navigate("HomeTabNavigator")}>{"< Home"}</Text>
        <View style={styles.container}>
        {/* Input Components */}
        <TextInput style = {styles.input}
            placeholder="Where are you going ?"
            value={inputText}
            onChange={setInputText}/>

        {/* List of destinations */}
        <FlatList 
            data={searchResults}
            renderItem={({item})=> 
                <Pressable onPress={()=>navigation.navigate("Guests")} style = {styles.row}>
                    <View style={styles.iconContainer}>
                        <Image source={LocIcon} style ={styles.locIcon}/>
                    </View>
                    <Text style={styles.locText}>{item.description}</Text>
                </Pressable>
            }/>

    </View>
    </>
    
  )
}

const styles = StyleSheet.create({
    container:{
        top:30,
        marginBottom:20,
        width:'90%',
        alignSelf:'center'
    },
    input:{
        fontSize:18,
        marginBottom:20,
        
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'lightgrey',
        paddingVertical:15

    },
    locIcon:{
        width:30,
        resizeMode:'contain',
        height:30,
    },
    locText:{

    },
    iconContainer:{
        backgroundColor:'lightgrey',
        padding:5,
        borderRadius:10,
        marginRight:10,

    }
})

export default DestinationSearch