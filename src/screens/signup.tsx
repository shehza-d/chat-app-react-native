import React from "react";
import { loginStyles as styles } from "../styles/loginCSS";
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
} from "react-native";

export default function SignupScreen(): JSX.Element {
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <View>
        <Image
          source={{
            uri: "https://res.cloudinary.com/deh1sqok6/image/upload/v1675425733/chatApp-Native/x1h7axsbix3m43klpikj.png",
          }}
          style={{ width: 200, height: 200, borderRadius: 30 }}
          alt="Shehzad Chat-App Logo"
        />
        {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
        <Text style={styles.subHeading}>SMIT CHAT</Text>
        <Text style={styles.subHeading}>Welcome back! Let's Login</Text>

        <View style={styles.inputContainer}>
          <TextInput
            autoFocus
            placeholder={"Email"}
            keyboardType="email-address"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            autoFocus
            placeholder={"Password"}
            keyboardType="email-address"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN-UP</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subHeading}>Already have an account? Login</Text>
        {/* </ScrollView> */}
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
