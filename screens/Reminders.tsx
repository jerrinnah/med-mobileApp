import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Reminders = (props) => {
  return (
    <View style={styles.remindPage}>
      <View>
        <Text style={styles.textTitle}>
          {" "}
          What time would you like to meditate?
        </Text>
        <Text style={styles.textSubTitle}>
          Any time you can choose but We recommend first thing in th morning.
        </Text>
      </View>
      <View style={styles.calander}>
        <Image source={require("../assets/calender.png")} />
      </View>
      <View>
        <Text style={styles.textTitle}>
          {" "}
          Which day would you like to meditate?
        </Text>
        <Text style={styles.textSubTitle}>
          Everyday is best, but we recommend picking at least five.
        </Text>
       
      </View>
      <Image style={styles.dateImg} source={require('../assets/dates.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  remindPage: {
    flex: 1,
    // backgroundColor:'red',
    justifyContent: "flex-start",
    paddingTop: 90,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 20,
    width: 200,
    textAlign: "left",
    fontWeight: "bold",
    marginRight: 160,
  },
  textSubTitle: {
    fontSize: 13,
    width: 320,
    textAlign: "left",
  },
  calander: {
    paddingTop: 20,
    marginTop: 50,
  },
  dateImg:{
    height:30,
    marginLeft:20,
    width:350,
    padding:10,
    marginTop:50,
  }
});

export default Reminders;
