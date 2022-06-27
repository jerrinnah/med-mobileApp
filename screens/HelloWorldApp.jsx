import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView} from 'react-native'
import { TextInput } from 'react-native'


const HelloWorldApp = () => {
  
  const [state, setState]= useState('Welcome')

  const clickHandler = () => {
    setState('Sign Up');
  }
 
  return (
    <View style={styles.container}>
      <Image style={styles.bg} source={require('./assets/banner-bg.png')} />
      <Image
        style={styles.banner}
        source={require('./assets/banner-girl.png')}
      />
      <Image style={styles.logo} source={require('./assets/logo-full.png')} />

      <View style={styles.textBox}>
        <Text style={styles.titleText}> We are what we do</Text>
        <Text style={styles.paragraph}>
          Thousands of people are using Silent Moon for small meditation...
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.white} onPress={clickHandler}> {state} </Text>
        </Pressable>
        <Text style={styles.paragraph}>All ready have an account? Log in</Text>
       
       
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 40,
  },
  logo: {
    position: 'absolute',
    top: 140,
    left: 110,
  },
  banner: {
    height: 240,
    width: 320,
    position: 'absolute',
    top: 240,
    right: 30,
    left: 40,
  },
  white: {
    color: 'white',
    fontSize: 13,
  },
  bg: {
    height: 600,
  },
  textBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontFamily: 'Futura',
  },
  paragraph: {
    width: 230,
    fontSize: 10,
    paddingTop: 10,
    textAlign: 'center',
    color: 'grey',
  },
  button:{
    marginTop: 15,
    alignItems:'center',
    justifyContent:'center',
    width:200,
    padding: 10,
    borderRadius:20,
    backgroundColor: '#8E97FD',
  }

 
 
})
export default HelloWorldApp