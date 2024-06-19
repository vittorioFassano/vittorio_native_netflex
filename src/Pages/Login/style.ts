import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    backgroundColor: "black",
    padding: 10,
    marginBottom: 50,
  },
  title: {
    color: "red",
    fontSize: 65,
    fontWeight: "bold",
  },
  logo: {
    position: "absolute",
    width: 1300,
    height: 1100,
    resizeMode: "contain",
  },
});
