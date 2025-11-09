import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./stylesCardOS";

interface CardOSProps {
  title: string;
  variant?: "light" | "dark";
  status: string
}

export function CardOS({ title, variant = "light", status }: CardOSProps) {

  const cardStyle =
    variant === "dark" ? [styles.card, styles.cardDark] : [styles.card, styles.cardLight];

  return (     
      <View style={cardStyle}>
        <Text style={[styles.titulo, variant === "dark" ? styles.textoClaro : styles.textoEscuro,]}>{title}</Text>
        <Text style={[styles.subtitulo, variant === "dark" ? styles.textoClaro : styles.textoEscuro,]}>{status}</Text>
      </View>
  );
}
