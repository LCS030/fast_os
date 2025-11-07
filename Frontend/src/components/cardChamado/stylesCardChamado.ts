import { colors } from "@/styles/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.blue[900],
    width: "100%",
    marginTop: 30,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    color: colors.gray[100],
    fontSize: 18,
    fontWeight: "bold",
  },
  verTexto: {
    color: colors.gray[100],
    fontSize: 16,
  },
  osContainer: {
    backgroundColor: colors.gray[200],
    padding: 15,
    marginVertical: 4,
  },
  osText: {
    fontSize: 14,
    color: colors.blue[900],
    fontWeight: "bold"
  },
});
