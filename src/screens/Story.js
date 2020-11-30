import React from "react";
import { StyleSheet, View, Image, FlatList, Text } from "react-native";

const Story = () => {
  const data = [
    {
      imageUri: require("../Pictures/1.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
    },
    {
      imageUri: require("../Pictures/2.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
    },
    {
      imageUri: require("../Pictures/3.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
    },
    {
      imageUri: require("../Pictures/4.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
    },
    {
      imageUri: require("../Pictures/5.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
    },
    {
      imageUri: require("../Pictures/6.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
    },
    {
      imageUri: require("../Pictures/7.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
    },
    {
      imageUri: require("../Pictures/8.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(name) => data.name}
        horizontal= {true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <Image style={styles.image} source={item.imageUri} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  image: {
    marginVertical: 8,
    marginHorizontal: 10,
    height: 62,
    width: 62,
    borderWidth: 3,
    borderColor: "purple",
    borderRadius: 31,
  },
});
