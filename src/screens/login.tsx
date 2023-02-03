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

export default function LoginScreen(): JSX.Element {
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}

      <View style={styles.container}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/deh1sqok6/image/upload/v1675425584/chatApp-Native/a17cjacnsa18wbk0baxb.png",
          }}
          style={{ width: 200, height: 200, borderRadius: 30 }}
          alt="Shehzad Chat-App Logo"
        />
        {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
        <Text style={styles.heading}>SMIT CHAT</Text>
        <Text style={styles.subHeading}>Welcome back! Let's Login</Text>

        <View style={styles.inputContainer}>
          {/* <Text style={styles.labels}>Enter you email</Text> */}
          <TextInput
            autoFocus
            placeholder={"Email"}
            keyboardType="email-address"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={'#a8a5a5'}
          />

          {/* <Text style={styles.labels}>Enter you Password</Text> */}
          <TextInput
            autoFocus
            placeholder={"Password"}
            keyboardType="email-address"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholderTextColor={'#a8a5a5'}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subHeading}>
          Don't have an account yet? Signup
        </Text>
        {/* </ScrollView> */}
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
