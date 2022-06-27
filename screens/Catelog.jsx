import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView} from 'react-native'
import { TextInput } from 'react-native'
import { ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font';

const Catelog = ({route}) => {

  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Roboto-Bold.ttf'),
  });

  const navigation = useNavigation();
  // console.log(route)



  return (
    <View style={styles.container}>
      
    <Image style={styles.bgUnion} source={require('../assets/Union.png')}/>

    <View>
      <View style={styles.introTitle}>
      <Text style={[styles.introHead]}> What Brings you</Text>
      <Text style={[styles.introSub]}> to silent Moon</Text>
      <Text style={[styles.introSubmin]}> choose a topic to focus on</Text>
      </View>
    </View>

    <View>

      
    </View>
      
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: 'white',
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
    introTitle:{
      position:'relative',
      bottom:630,
      justifyContent:'flex-end',
      right:90,
    },
    introHead:{
      fontFamily:'Roboto-Bold',
      fontSize:23,
      fontWeight:'600',
    },
    introSub:{
      fontFamily:'Roboto-Bold',
      fontSize:25,
      fontWeight:'200',
    },
    introSubmin:{
      fontFamily:'Roboto-Bold',
      fontSize:15,
      fontWeight:'200',
    },
 
  })

export default Catelog;
