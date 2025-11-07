import { colors } from "@/styles/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 50,
    marginTop: 170, // empurra o conteúdo para baixo do header
  },
  title: {
    fontSize: 40,
    color: colors.blue[900],
    fontWeight: "400",
    marginBottom: 40,
  },
  form: {
    width: "100%",
    gap: 30,
    alignItems: "center",
  },
});
