import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import SingleChatItem from "../components/SingleChatItem";
import { userData } from "../../types/types";

const data: userData = [
  {
    userName: "shehzad",
    photoURL:
      "https://res.cloudinary.com/deh1sqok6/image/upload/v1667386308/shehzad_m2d8bz.jpg",
    unreadMsg: 8,
  },
  {
    userName: "saad",
    photoURL:
      "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    unreadMsg: 3,
  },
  {
    userName: "Sir Inzamam🥰",
    photoURL:
      "https://scontent.fkhi25-1.fna.fbcdn.net/v/t1.6435-9/78652313_2234503269983211_613740810734665728_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=7aed08&_nc_ohc=6Y-aiqsDdGUAX_YSg6Z&tn=PVWLOnEPcl9TP1UM&_nc_ht=scontent.fkhi25-1.fna&oh=00_AfCR7IHbct7-E9lK-mOfJYQBDGLyAWu4kWODQS-XMthyTw&oe=640DD259",
    unreadMsg: 0,
  },
];

export default function AllChat() {
  return (
    <SafeAreaView>
      <ScrollView>
        {data?.map((user) => (
          <SingleChatItem
            userName={user.userName}
            photoURL={user.photoURL}
            time={"5:33 AM"}
            unreadMsg={user.unreadMsg}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
