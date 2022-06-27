import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView} from 'react-native'
import { useNavigation } from '@react-navigation/native'


const SignIn = ({route}) => {

    const navigation = useNavigation();

    console.log(route);



  return (
    <View style={styles.container}>
      <Image style={styles.girlBg} source={(require('../assets/mediGirl.png'))}/>
      <View style={styles.header}>
      <Image style={styles.logoIcon} source={require('../assets/logo-full.png')}/>
     <View style={styles.welcomeMessage}>
      <Text style={[styles.userFName, styles.white]}>Hi Jerry, Welcome</Text>
      <Text style={[styles.subText, styles.white]}>to Silent Moon</Text>
      
     </View>

     <Pressable onPress={()=> navigation.navigate('catelog')} style={styles.startBtn}>
       
        <Text  style={styles.black}> GET STARTED</Text>
      </Pressable>
      </View>

      
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#8C96FF',
      paddingBottom: 40,
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
      flex:1,
      justifyContent:'center',
      alignContent:'center',
      bottom:250,
    },
    userFName:{
      fontSize: 20,
      justifyContent:'center',
      // fontWeight:200,
    },
    subText:{
      left:37,
    },
    girlBg:{
      position:'absolute'
    },
    startBtn:{

      alignItems:'center',
      backgroundColor:'white',
      borderRadius:30,
      padding:15,
      
    },
 
  })

export default SignIn;
