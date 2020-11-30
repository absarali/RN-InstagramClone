import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";

const Post = () => {
  const posts = [
    {
      imageUri: require("../Pictures/1.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
      likes: Math.floor(Math.random() * 100000),
    },
    {
      imageUri: require("../Pictures/2.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
      likes: Math.floor(Math.random() * 100000),
    },
    {
      imageUri: require("../Pictures/3.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
      likes: Math.floor(Math.random() * 100000),
    },
    {
      imageUri: require("../Pictures/4.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
      likes: Math.floor(Math.random() * 100000),
    },
    {
      imageUri: require("../Pictures/5.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
      likes: Math.floor(Math.random() * 100000),
    },
    {
      imageUri: require("../Pictures/6.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
      likes: Math.floor(Math.random() * 100000),
    },
    {
      imageUri: require("../Pictures/7.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
      likes: Math.floor(Math.random() * 100000),
    },
    {
      imageUri: require("../Pictures/8.jpeg"),
      name: Math.random().toString(36).substring(2, 9),
      likes: Math.floor(Math.random() * 100000),
    },
  ];
  return (
    <FlatList
      data={posts}
      keyExtractor={(name) => posts.name}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <View style={{ marginVertical: 10 }}>
            <View style={styles.headerMain}>
              <Image style={styles.headerImage} source={item.imageUri} />
              <View style={styles.headerSub}>
                <Text style={styles.headerText}>{item.name}</Text>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={24}
                  color="black"
                />
              </View>
            </View>
            <Image style={styles.postImage} source={item.imageUri} />
            <View style={styles.postFooter}>
              <View style={styles.postFooterIcons}>
                <Feather
                  style={{ marginHorizontal: 10 }}
                  name="heart"
                  size={24}
                  color="black"
                />
                <FontAwesome5
                  style={{ marginHorizontal: 10 }}
                  name="comment"
                  size={24}
                  color="black"
                />
                <Feather
                  style={{ marginHorizontal: 10 }}
                  name="send"
                  size={24}
                  color="black"
                />
              </View>
              <Feather name="bookmark" size={24} color="black" />
            </View>
            <Text style={styles.text}> {item.likes} Likes</Text>
          </View>
        );
      }}
    />
  );
};

export default Post;
const styles = StyleSheet.create({
  headerMain: {
    flexDirection: "row",
    marginHorizontal: 5,
  },
  headerSub: {
    marginVertical: 10,
    marginLeft: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  headerImage: {
    height: 50,
    width: 50,
    borderWidth: 3,
    borderColor: "purple",
    borderRadius: 25,
  },
  headerText: {
    fontWeight: "bold",
  },
  postImage: {
    marginVertical: 10,
    width: "100%",
    height: 250,
  },
  postFooter: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postFooterIcons: {
    flexDirection: "row",
  },
  text: {
    margin: 10,
    fontWeight: "bold",
  },
});
