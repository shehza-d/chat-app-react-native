import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import LoginScreen from "./src/screens/login";
import SignupScreen from "./src/screens/signup";
// import Login from './components/login';
// import {styles}  from './styles/styleSheet';

const statusBarStyles: string[] = ["default", "dark-content", "light-content"];
const Stack = createNativeStackNavigator();
const globalScreenOptions = {
  // headerStyle:{backgroundColor:'#31F711FF'},
  headerStyle: { backgroundColor: "#5DFF43" },
  headerTitleStyle: { color: "black" },
  headerTintColor: { color: "black" },
};

export default function App() {
  return (
    <>
      <StatusBar
        // animated={true}
        backgroundColor="#5DFF43"
        barStyle={statusBarStyles[1]}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            // options={{ title: "Let's get Started" }}
          />
           <Stack.Screen
            name="Sign-up"
            component={SignupScreen}
            options={{ title: "Let's get Started" }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
