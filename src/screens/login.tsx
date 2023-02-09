import React, { RefObject, useRef, useState } from "react";
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

// const BASE_URI = "http://192.168.100.26:3003";
const BASE_URI = "https://785f-203-81-217-42.ngrok.io";

export default function LoginScreen({ navigation }: any): JSX.Element {
  // const { state, dispatch } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const passwordInputRef: any = useRef("");

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${BASE_URI}/login`,
        {
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
      {/* <StatusBar /> */}
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          style={styles.innerContainer}
        >
          <LogoIcon />

          <Text style={styles.heading}>SMIT CHAT</Text>
          <Text style={styles.subHeading}>Welcome back! Let's Login</Text>

          <View style={styles.inputContainer}>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder={"Email"}
              keyboardType="email-address"
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={"#a8a5a5"}
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current.focus()}
            />

            <TextInput
              ref={passwordInputRef}
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              // value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder={"Password"}
              // keyboardType={true ? "default" : "visible-password"}
              // keyboardType="default"
              // keyboardType={`${false ? "default" : "visible-password"}`}
              placeholderTextColor={"#a8a5a5"}
              returnKeyType="done"
              onSubmitEditing={() => handleSubmit()}
              // blurOnSubmit={false}
              multiline={false}
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
              {isLoading ? (
                <ActivityIndicator size="small" />
              ) : (
                <Text style={styles.buttonText}>LOGIN</Text>
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Sign-up")}>
            <Text style={styles.footerText}>
              Don't have an account yet? Sign-up
            </Text>
          </TouchableOpacity>

          <Text style={styles.shehzad}>Powered by SHEHZAD</Text>
        </KeyboardAvoidingView>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
