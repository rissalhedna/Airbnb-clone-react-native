import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {useState} from 'react'

const GuestComponent = ({type, desc}) => {

    const [number, setNumber] = useState(0)
    
  return (
    <View style={styles.container}>
      {/* Row 1 Adults */}
      <View style={styles.row}>

      {/* Titles */}
        <View>
            <Text style={{fontWeight:'bold'}}>
                {type}
            </Text>
            <Text style={{color:'lightgrey'}}>
                {desc}
            </Text>
        </View>

      {/* Buttons with value */}
        <View style={styles.digitRow}>

            <Pressable 
                onPress={()=>{
                        if(number>0){
                            setNumber(number-1)
                        }
                    }
                }
                style = {styles.button}>
                <Text style={styles.sign}>-</Text>
            </Pressable>

            <Text style={{width:20, textAlign:'center'}}>{number}</Text>

            <Pressable 
                onPress={()=> setNumber(number+1)}
                style = {styles.button}>
                <Text style={styles.sign}>+</Text>
            </Pressable>
        </View>
      </View>
      {/* Row 1 Adults */}
    </View>
    
  )
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:'lightgrey',
        paddingBottom:15,
        marginBottom:15
    },
    digitRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        borderColor:"grey",
        borderWidth:1,
        padding:5,
        borderRadius:50,
        width:37,
        height:37,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10,
        backgroundColor:'lightgrey'
    },
    sign:{
        fontSize:18,
    }
})

export default GuestComponent