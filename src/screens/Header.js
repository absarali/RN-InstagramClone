import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Feather name="camera" size={26} color="black" />
      <Image style={styles.image} source={require("../Pictures/logo.png")} />
      <Feather name="send" size={30} color="black" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    marginTop: 20,
    marginHorizontal: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "silver",
  },
  image: {
    width: 120,
    height: 30,
  },
});
