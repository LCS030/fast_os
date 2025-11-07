import { styles } from "@/components/cardChamado/stylesCardChamado";
import React, { useState } from "react";
import { FlatList, LayoutAnimation, Platform, Text, TouchableOpacity, UIManager, View } from "react-native";

interface OS {
  id: number;
  codigo: string;
}

interface CardChamadoProps {
  titulo: string;
  osList: OS[];
  onVerPress: () => void; // função que leva pra tela de detalhes
}

// Habilitar animação no Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function CardChamado({ titulo, osList, onVerPress }: CardChamadoProps) {
  const [aberto, setAberto] = useState(false);

  const handleToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setAberto(!aberto);
  };

  return (
    <View style={styles.cardContainer}>

      <View style={styles.header}>
        <TouchableOpacity onPress={handleToggle} style={{ flex: 1 }}>
          <Text style={styles.title}>{titulo}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onVerPress}>
          <Text style={styles.verTexto}>Ver</Text>
        </TouchableOpacity>
      </View>

      {aberto && (
        <FlatList
          data={osList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.osContainer}>
              <Text style={styles.osText}>OS - {item.codigo}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
