import { View, Text , StyleSheet, TextInput, FlatList, Image} from 'react-native'
import React , {useState} from 'react'
import searchResults from '../../../assets/Data/search'
import LocIcon from '../../../assets/Images/loc.png'
const DestinationSearch = () => {

    const [inputText, setInputText] = useState("")

  return (
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
                <View style = {styles.row}>
                    <View style={styles.iconContainer}>
                        <Image source={LocIcon} style ={styles.locIcon}/>
                    </View>
                    <Text style={styles.locText}>{item.description}</Text>
                </View>
            }/>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:20,
        width:'70%',
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