import { StyleSheet } from "react-native";

// #5DFF43 theme green

export const loginStyles = StyleSheet.create({
  container: {
    // flex:1,
    marginTop: 32,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  inputContainer: {
    width: "100%",
    color: "yellow",
  },
  heading: {
    fontFamily: "Outfit-600",
    letterSpacing: 2,
    fontSize: 34,
    color: "black",
  },
  subHeading: {
    fontFamily: "Outfit-500",
    color: "black",
  },
  textInput: {
    fontFamily: "Outfit-400",
    margin: 15,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 10,
    color: "black",
    fontSize: 20,
  },
  button: {
    margin: 15,
    padding: 12,
    borderWidth: 2,
    height:50,
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#5DFF43",
  },
  buttonText: {
    fontFamily: "Outfit-600",
    fontSize: 20,
    letterSpacing: 3,
    color: "#474747",
  },
  forgetPsw: {
    fontFamily: "Outfit-200",
    textAlign: "right",
    paddingRight: 18,
    color: "black",
  },
  footerText: {
    fontFamily: "Outfit-300",
    marginTop: 20,
    textAlign: "center",
    color: "black",
  },
  shehzad: {
    fontFamily: "Outfit-200",
    marginTop: 50,
    fontSize: 13,
    textAlign: "center",
    color: "black",
  },
});
