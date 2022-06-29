import React from 'react'
import { View, StyleSheet, Text,Image, FlatList } from 'react-native';




const card =({info}) => {
    const {title, image} = info;
  return (
    <View style={styles.imageContainer}>
        <Image style={styles.cardImage} source={image} />
        <Text style={[styles.white, styles.cardText]}> {title}</Text>
    </View>
  )
}
  
export default card;

const styles = StyleSheet.create({
    
    // imageContainer:{
    //    position:'relative',
    // },
    cardImage:{
        
        width:170,
        marginBottom: 10,
        marginRight:20,
        borderRadius:20,
        position:'relative',

    },
    white:{
        color: 'black',
    },
    cardText:{
        fontSize:18,
        textAlign:'center',
        fontWeight:'600',
        position:'relative',
        justifyContent:'center',
        alignSelf:'flex-start',
        paddingBottom:8,
        marginBottom:25,
        

    }

})

