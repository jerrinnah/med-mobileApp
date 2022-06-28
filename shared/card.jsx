import React from 'react'
import { StyleSheet, View,Image, Text } from 'react-native'

export default function Card(props) {
    console.log(props);
  return (
    <View style={styles.card}>
        <View style={styles.cardContent}>
            <Image source={require('../assets/flygirl.png')}/>
            <Text style={[styles.white, styles.cardText]}>Reduce Stress!</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        height:230,
        width: 200,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:20,
        backgroundColor:'black',
        shadowOffset:{width:1, height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        borderRadius:6,
        elevation:3,
        position:'absolute',
        bottom:90,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6,

    },
    cardContent:{
        // height:90,
    },
    cardImage:{
        height:10,
        width:10,
    },
    white:{
        color: 'white',
    },
    cardText:{
        fontSize:18,
        paddingTop: 50,
    }

})

