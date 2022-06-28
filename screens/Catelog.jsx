import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import Card from "../components/card";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

const excercises = [
  {
    id: 1,
    image: require("../assets/blue.png"),
    title: "Reduce Stress",
  },
  {
    id: 2,
    image: require("../assets/green.png"),
    title: "Man",
  },
  {
    id: 3,
    image: require("../assets/sleepb.png"),
    title: "Cry Happiness",
  },
  {
    id: 4,
    image: require("../assets/orangw.png"),
    title: "Better Sleep",
  },
  {
    id: 5,
    image: require("../assets/peach.png"),
    title: "Personal growth",
  },
  {
    id: 6,
    image: require("../assets/float.png"),
    title: "Reduce anxiety",
  },
  {
    id: 7,
    image: require("../assets/mediGirl.png"),
    title: "Friends",
  },
  {
    id: 8,
    image: require("../assets/sleepb.png"),
    title: "Cry Happiness",
  },
];

const Catelog = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.introTitle}>
        <Text style={[styles.introHead]}> What Brings you</Text>
        <Text style={[styles.introSub]}> to silent Moon</Text>
        <Text style={[styles.introSubmin]}> choose a topic to focus on</Text>
      </View>
      <Image style={styles.bgUnion} source={require("../assets/Union.png")} />
      <View style={styles.cardContainer}>
        {/* <Card /> */}

        <View style={styles.FlatList}>
          <FlatList
            data={excercises}
            renderItem={({ item }) => {
              return <Card info={item} />;
            }}
            keyExtractor={(excercise) => excercise.id.toString()}
            numColumns={2}
          />

            <Pressable onPress={()=> props.navigation.navigate('reminders')}>
            <Text style={[styles.grey, styles.bottomText]}>SET REMINDER</Text>
            </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },

  cardContainer: {
    position: "absolute",
    top: 200,
    Height: 100,
    width: 395,
    // backgroundColor:'red',
  },
  header: {},
  // TEXT STYLES
  white: {
    color: "white",
  },
  grey: {
    color: "grey",
  },
  // TEXT STYLES ENDS
  introTitle: {
    alignItems: "center",
    justifyContent: "flex-end",
    right: 90,
  },
  introHead: {
    // fontFamily:'Roboto-Bold',
    fontSize: 23,
    fontWeight: "600",
  },
  introSub: {
    // fontFamily:'Roboto-Bold',
    fontSize: 25,
    fontWeight: "200",
  },
  introSubmin: {
    // fontFamily:'Roboto-Bold',
    fontSize: 15,
    fontWeight: "200",
  },
  FlatList: {
    // backgroundColor:'green',
    justifyContent: "center",
    alignContent: "center",
    padding: 9,
    flexWrap: "wrap",
    height: 1200,
    width: 420,
    paddingBottom: 590,
  },
  bottomText:{
    paddingTop:10,
    alignSelf:'center'
  }
  
});

export default Catelog;
