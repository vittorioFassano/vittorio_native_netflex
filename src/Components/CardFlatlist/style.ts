import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerInfo: {
    backgroundColor: "#8F0000",
    marginTop: 20,
    borderRadius: 10,
    width: "95%",
    alignSelf: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 80,
  },

  name: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },

  description: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  infoColumn: {
    flex: 1,
    alignItems: "center",
  },

  infoLabel: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
  },

  infoValue: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
