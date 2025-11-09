import { StyleSheet } from "react-native";
import { colors } from "@/styles/Colors";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.blue[900],
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  pedido: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.gray[100],
  },
  status: {
    fontSize: 14,
    color: colors.gray[100],
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    fontSize: 13,
    color: colors.gray[100],
  },
  osContainer: {
    marginTop: 15,
    backgroundColor: colors.gray[100],
    borderRadius: 8,
    padding: 10,
  },
  botaoDetalhe: {
    backgroundColor: colors.blue[900],
    borderRadius: 8,
    paddingVertical: 8,
    marginTop: 4,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "600",
  },
});
