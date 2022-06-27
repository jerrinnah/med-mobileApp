import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView} from 'react-native'
import { TextInput } from 'react-native'

const SignIn = () => {



  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image style={styles.logoIcon} source={require('./assets/logo-full.png')}/>
     <View style={styles.welcomeMessage}>
      <Text style={styles.userFName}>Hi Danlei, Welcome</Text>
      <Text style={styles.subText}>to Silent Moon</Text>
     </View>

      </View>
      
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'flex-start',
      alignItems:'center',
      backgroundColor: '#8C96FF',
      // paddingBottom: 40,
    },
    header:{

      
    },
    // TEXT STYLES
    white:{
      color:'white'
    },
    grey:{
      color:'grey',
    },
    // TEXT STYLES ENDS
   
    logoIcon:{
      position:'relative',
      top:90,
      left:10,
    },
    welcomeMessage:{
      paddingTop: 130,
      justifyContent:"center",
      // backgroundColor:'red',
     

    },
    userFName:{
      fontSize: 25,
    },
 
  })

export default SignIn;
