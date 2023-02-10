import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { userData } from "../../types/types";

const themeColor = "#5DFF43";

export default function SingleChatItem({
  userName,
  photoURL,
  time,
  unreadMsg,
}: {
  userName: string;
  photoURL: string;
  time: string;
  unreadMsg: number;
}) {
  return (
    <View style={styles.userContainer}>
      <Image
        style={{
          width: 70,
          height: 70,
          borderRadius: 50,
          borderColor: "#5DFF43",
          borderWidth: 1,
        }}
        source={{
          uri: photoURL,
        }}
      />
      <View style={{}}>
        <Text
          style={{
            color: "black",
            fontFamily: "Outfit-600",
            letterSpacing: 2,
            fontSize: 21,
            textTransform: "capitalize",
          }}
        >{`${userName}`}</Text>
        <Text
          style={{ color: "black", fontFamily: "Outfit-400" }}
        >{` your message preview... `}</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text
          style={{ color: "black", fontFamily: "Outfit-300" }}
        >{`${time}`}</Text>
        <Text
          style={{
            color: "black",
            backgroundColor: themeColor,
            textAlign: "center",
            padding: 4,
          marginTop:8,
            width: 30,
            fontFamily: "Outfit-400",
            borderRadius: 50,
          }}
        >{`${unreadMsg}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    // display:'flex',
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // borderWidth: 2,
    borderBottomColor: themeColor,
    borderBottomWidth: 2,
    color: "black",
  },
});
