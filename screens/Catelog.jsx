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
import Card from "../shared/card";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

const excercises = [
  {
    id: 1,
    image:  require("../assets/mediGirl.png"),
    title: "Reduce Stress Here",
  },
  {
    id: 2,
    image: require("../assets/mediGirl.png"),
    title: "Improve performance",
  },
  {
    id: 3,
    image: require("../assets/mediGirl.png"),
    title: "Increase Happiness",
  },
  {
    id: 4,
    image: require("../assets/mediGirl.png"),
    title: "Better Sleep",
  },
  {
    id: 5,
    image: require("../assets/mediGirl.png"),
    title: "Personal growth",
  },
  {
    id: 6,
    image: require("../assets/mediGirl.png"),
    title: "Reduce anxiety",
  },
];

const Catelog = ({ route }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.bgUnion} source={require("../assets/Union.png")} />

      <View>
        <View style={styles.introTitle}>
          <Text style={[styles.introHead]}> What Brings you</Text>
          <Text style={[styles.introSub]}> to silent Moon</Text>
          <Text style={[styles.introSubmin]}> choose a topic to focus on</Text>
        </View>
      </View>

      <View>
        {/* <Card /> */}
      </View>
       
      <FlatList
        data={excercises}
        renderItem={({ item }) => {
          
          return <Card info={item} />;
        }}
        keyExtractor={(excercise) => excercise.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 40,
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
    position: "relative",
    bottom: 630,
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
});

export default Catelog;
