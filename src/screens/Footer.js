import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons, Feather, AntDesign } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <MaterialIcons name="home" size={24} color="black" />
      <Feather name="search" size={24} color="black" />
      <AntDesign name="plussquareo" size={24} color="black" />
      <Feather name="heart" size={24} color="black" />
      <Feather name="user" size={24} color="black" />
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Footer;
