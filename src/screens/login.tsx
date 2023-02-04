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
// import Svg, { Circle } from "react-native-svg";
import { SvgUri } from 'react-native-svg';

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
        {/* <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
        </Svg> */}

        <SvgUri
    width="100%"
    height="100%"
    uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
  />



        <View style={styles.inputContainer}>
          {/* <Text style={styles.labels}>Enter you email</Text> */}
          <TextInput
            autoFocus
            placeholder={"Email"}
            keyboardType="email-address"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={"#a8a5a5"}
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
            placeholderTextColor={"#a8a5a5"}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>Don't have an account yet? Signup</Text>
        {/* </ScrollView> */}
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
