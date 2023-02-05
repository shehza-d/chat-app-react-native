import React, { useState } from "react";
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
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import LogoIcon from "../../assets/icons/logoIcon"; //SVG

export default function LoginScreen(): JSX.Element {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (userName.toLowerCase() && password === "123456") {
      Alert.alert("correct");
    } else {
      Alert.alert("Email or Password is incorrect!");
    }
    return;
  };
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" enabled style={styles.innerContainer}>
          <LogoIcon />

          <Text style={styles.heading}>SMIT CHAT</Text>
          <Text style={styles.subHeading}>Welcome back! Let's Login</Text>

          <View style={styles.inputContainer}>
            <TextInput
              value={userName}
              onChangeText={(text) => setUserName(text)}
              autoFocus
              placeholder={"Email"}
              keyboardType="email-address"
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={"#a8a5a5"}
            />

            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder={"Password"}
              keyboardType="visible-password"
              placeholderTextColor={"#a8a5a5"}
              // blurOnSubmit={false}
              // multiline={false}
              // onChangeText={password => updateState({password})}
              // right={
              //   <TextInput.Icon
              //     name="eye"
              //     onPress={() => setHidePass(!hidePass)}
              //   />
              // }
            />
            {/* <View style={{height:100}}/> */}
            <TouchableOpacity>
              <Text style={styles.forgetPsw}>Forget Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.footerText}>
              Don't have an account yet? Signup
            </Text>
          </TouchableOpacity>

          <Text style={styles.shehzad}>Powered by SHEHZAD</Text>
        </KeyboardAvoidingView>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
