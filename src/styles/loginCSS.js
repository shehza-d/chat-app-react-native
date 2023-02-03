import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width:'100%',
    color: "yellow",
  },
  heading: {
    fontSize: 34,
    color:'black',
    fontWeight: "600",
    // marginTop: 8,
  },
  subHeading: {
    fontWeight: "700",
    color: "black",
  },
  textInput: {
    margin: 15,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 10,
    color: "black",
    fontSize: 18,
    fontFamily: "regular",
    // backgroundColor: "black",
  },
  button: {
    // color:'black',
    margin: 15,
    padding: 15,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#5DFF43",
  },
  buttonText: {
    fontWeight: 600,
    color: "#474747",
  },
  // labels: {
  //   color: "black",
  // },
  textInput2: {},
  labels2: {},
  labels3: {},
});
