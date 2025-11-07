import { StyleSheet } from "react-native";

import { colors } from "@/styles/Colors";
 
export const styles = StyleSheet.create ({
    container: {
        height: 52,
        width: "100%",
        backgroundColor: colors.gray[200],
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.gray[800],
        padding: 10,
        color: colors.gray[950],
        fontSize: 16
    }
})