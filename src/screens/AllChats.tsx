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
      "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
      unreadMsg:8
    },
  {
    userName: "saad",
    photoURL:
      "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
      unreadMsg:3
    },
];

export default function AllChat() {
  return (
    <SafeAreaView>
      <ScrollView>
        {data?.map((user) => (
          <SingleChatItem userName={user.userName} photoURL={user.photoURL} time={'5:33 AM'} unreadMsg={user.unreadMsg}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
