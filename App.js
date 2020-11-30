import React from "react";
import { View, StyleSheet } from "react-native";
import Story from "./src/screens/Story";
import Header from "./src/screens/Header";
import Post from "./src/screens/Post";
import Footer from "./src/screens/Footer";

const App = () => {
  return (
    <View style={styles.parent}>
      <Header />
      <Story />
      <Post />
      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {
    flex: 1
  }
});
export default App;
