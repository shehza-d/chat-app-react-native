import React, { useRef, useState } from "react";
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
  ActivityIndicator,
} from "react-native";
import LogoIcon from "../../assets/icons/logoIcon"; //SVG
import axios from "axios";

const BASE_URI = "https://785f-203-81-217-42.ngrok.io";

export default function LoginScreen({ navigation }: any): JSX.Element {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef: any = useRef("");
  const passwordInputRef: any = useRef("");

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${BASE_URI}/signup`,
        {
          userName: userName,
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      console.log(res);
    } catch (err: any) {
      console.log(err);
      Alert.alert("Error", `${err?.response?.data?.message || "Failed"}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView>
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <ScrollView contentContainerStyle={styles.container}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          style={styles.innerContainer}
        >
          <LogoIcon />

          <Text style={styles.heading}>SMIT CHAT</Text>
          <Text style={styles.subHeading}>Let's create you account</Text>

          <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize="words"
              autoCorrect={false}
              keyboardType="default"
              onChangeText={(text) => setUserName(text)}
              onSubmitEditing={() => emailInputRef.current.focus()}
              placeholder={"Name"}
              placeholderTextColor={"#a8a5a5"}
              style={styles.textInput}
              // value={userName}
            ></TextInput>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              onSubmitEditing={() => passwordInputRef.current.focus()}
              placeholder={"Email"}
              placeholderTextColor={"#a8a5a5"}
              ref={emailInputRef}
              style={styles.textInput}
              // value={password}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              // blurOnSubmit={false}
              keyboardType="default"
              multiline={false}
              onChangeText={(text) => setPassword(text)}
              placeholder={"Password"}
              placeholderTextColor={"#a8a5a5"}
              ref={passwordInputRef}
              secureTextEntry={true}
              style={styles.textInput}
              value={password}
              // right={
              //   <TextInput.Icon
              //     name="eye"
              //     onPress={() => setHidePass(!hidePass)}
              //   />
              // }
            />
            {/* <View style={{height:100}}/> */}
            {/* <TouchableOpacity>
              <Text style={styles.forgetPsw}>Forget Password?</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              {isLoading ? (
                <ActivityIndicator size="small" />
              ) : (
                <Text style={styles.buttonText}>SIGN-UP</Text>
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.footerText}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
          {/* <Text style={styles.shehzad}>Powered by SHEHZAD</Text> */}
        </KeyboardAvoidingView>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
