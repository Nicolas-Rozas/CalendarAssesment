import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  actionContainer: {
    width: "85%",
    padding: 14,
    marginVertical: 5,
    borderRadius: 4,
    backgroundColor: "#848FA5",
  },
  actionText: {
    color: "white",
    fontSize: 16,
  },
  textStyles: { fontSize: 15, color: "white", fontWeight: "500" },
  monthHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  dayOfWeekText: {
    marginRight: 10,
    fontWeight: "600",
    fontSize: 15,
    minWidth: 30,
    marginTop: 5,
  },
  dayIconContainer: {
    flexDirection: "column",
    width: 45,
  },
  vendorContainer: {
    marginBottom: 8,
    width: "100%",
  },
  titleStyles: {
    fontWeight: "bold",
    color: "white",
    fontSize: 17,
  },
});
