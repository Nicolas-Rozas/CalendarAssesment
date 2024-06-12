import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loaderContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  dateStatusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  subTitleStyles: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 10,
  },
  textStyles: {
    fontSize: 16,
    marginBottom: 4,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#F3F3F3",
    height: 40,
    justifyContent: "center",
    borderRadius: 5,

    paddingLeft: 15,
  },
  textInput: {
    fontSize: 16,
    color: "#000",
    fontWeight: "400",
  },
  buttonContainer: {
    marginTop: 25,
  },
  saveButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#00B47D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
