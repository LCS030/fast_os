import { StyleSheet } from "react-native";
import { colors } from "@/styles/Colors";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardLight: {
    backgroundColor: colors.gray[100],
  },
  cardDark: {
    backgroundColor: colors.blue[900],
  },
  titulo: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 12,
  },
  textoClaro: {
    color: colors.gray[100],
  },
  textoEscuro: {
    color: colors.blue[900],
  },
});
