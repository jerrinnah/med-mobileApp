import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView} from 'react-native'
import { TextInput } from 'react-native'

const SignIn = () => {

  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      
      <View>
        <Image source={require('./assets/signinBg.png')}/>
        <Image style={styles.leftIcon} source={require('./assets/left-icon.png')}/>
      </View>
      <Text style={styles.headerText}> Create your account</Text>
     <View style={styles.buttonsGroup}>
     <Pressable style={styles.facebookBtn}>
        <Image source={require('./assets/facebook.png')}/>
        <Text style={styles.white}> CONTINUE WITH FACEBOOK</Text>
      </Pressable>
      <Pressable style={styles.googleBtn}>
        <Image source={require('./assets/google.png')}/>
        <Text style={styles.black}> CONTINUE WITH GOOGLE</Text>
      </Pressable>
     </View>
     <Text  style={[styles.black, styles.email]}> OR LOGIN WITH EMAIL</Text>
    
    <View>
    
     <View style={styles.nameInput}>
     <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Name"
      />
      <Image style={styles.tickIcon} source={require('./assets/tick.png')}/>
     </View>

     <View style={styles.emailInput}>
     <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Email"
      />
      <Image style={styles.tickIcon} source={require('./assets/tick.png')}/>
     </View>

      <View>
        
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Password"
        />
         <Image style={styles.tickIcon} source={require('./assets/eye.png')}/>
      </View>
        

    </View>
    <Pressable style={styles.loginBtn}>
      <Text style={styles.white}> GET STARTED</Text>
     
    </Pressable>
    <Text style={styles.forgetPassword}>Forgot Password?</Text>
    <View>
      
    </View>
    <Text>i have read the Privace Policy</Text>
    

    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'flex-start',
      alignItems:'center',
      backgroundColor: 'white',
      // paddingBottom: 40,
    },
    emailInput: {},
    // TEXT STYLES
    black: {},
    white:{
      color:'white'
    },
    grey:{
      color:'grey',
    },
    // TEXT STYLES ENDS
    leftIcon:{
      position: 'absolute',
      top:90,
      left:10,
      height:40,
      width:40,
    },
    headerText:{
      position:'absolute',
      top:150,
      fontSize:30,
     
    },
    facebookBtn:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      width:340,
      height:60,
      backgroundColor:'#8E97FD',
      borderRadius:30,
      padding:15,
      
    },

    googleBtn:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      width:340,
      height:60,
      backgroundColor:'transparent',
      borderRadius:30,
      padding:15,
      outlineColor: "black",
      outlineStyle: "solid",
      outlineWidth: 9,
      marginTop:20,
      borderColor: "black",
      borderWidth: 1,
    },

    buttonsGroup:{
      bottom:120,
     },

     email:{
      bottom:90,
     },
  
     input: {
      height: 50,
      width:340,
      margin: 16,
      padding: 10,
      borderRadius:9,
      backgroundColor:'#F2F3F7',
      marginTop:5,
    },
    loginBtn:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      width:340,
      height:60,
      backgroundColor:'#8E97FD',
      borderRadius:30,
      padding:15,
      outlineWidth: 9,
      marginTop:20,
    },
    forgetPassword:{
      paddingTop:10,
    },
    signup:{
      fontSize:10,
      paddingTop:70,
    },
    nameInput:{
      flexDirection:'row',
      position:'relative'
    },
    tickIcon:{
      position:'absolute',
      top:25,
      right:30,
    }
    
  
   
   
  })

export default SignIn;
