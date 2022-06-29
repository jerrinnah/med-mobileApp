import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Course from "../components/course";

const Home = () => {
  return (
    <View>
      <View style={styles.homeLayout}>
        <View style={styles.logo}>
            <Image source={require('../assets/logo-full.png')}/>
        </View>
        <View style={styles.textTitle} >
            <Text style={styles.nameTitle}>Good Morning, Jerry</Text>
            <Text style={[styles.subTitle, styles.Grey]}>We Wish you have a good day</Text>
        </View>

        <View style={styles.courseContainer}>
            <Course/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

    // Text Style
    Grey:{
        color:'#bababa',
    },
    // Text Style end
  homeLayout: {
    position:'relative',
    top:0,
    bottom:0,
    left:0,
    right:0,
  },
  logo:{
    justifyContent:'center',
    alignItems:'center',
    top:100,
  },
  textTitle:{
    top:150,
    marginLeft:20,
    
  },
  nameTitle:{
    fontWeight:'bold',
    fontSize:19,
  },
  subTitle:{

  },
  courseContainer:{
    justifyContent:'center',
    al
  }
});

export default Home;
