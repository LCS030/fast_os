import { colors } from "@/styles/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        height: 52,
        width: "100%",
        backgroundColor: colors.blue[900],
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: colors.gray[100],
        fontSize: 20,
        fontWeight: "600",
    }
})