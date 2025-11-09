import React, { useState } from "react";
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from "react-native";
import { styles } from "./stylesCardChamado";
import { useRouter } from "expo-router";
import { CardOS } from "../cardOS/indexCardOS";

// Habilita animações suaves no Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface CardChamadoProps {
  chamado: {
    id: number;
    nome_cliente: string;
    pedido: string;
    status: string;
    descricao_cliente: string;
    data_agendamento: string;
  };
}

export function CardChamado({ chamado }: CardChamadoProps) {
  const router = useRouter();
  const [expandido, setExpandido] = useState(false);

  const handleExpandir = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandido(!expandido);
  };

  const handlePress = () => {
    router.push({
      pathname: "/DetalheChamado/indexDetalheChamado",
      params: { id: chamado.id },
    });
  };

  return (
      <View style={styles.card}>
              <TouchableOpacity onPress={handleExpandir} activeOpacity={0.8}>
          <View style={styles.header}>
            <Text style={styles.pedido}>{chamado.pedido}</Text>
            <Text style={styles.status}>{chamado.status}</Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.info}>Cliente: {chamado.nome_cliente}</Text> // TO DO: não está pegando o nome do cliente - Verificar o que fazer
            <Text style={styles.info}>
              {new Date(chamado.data_agendamento).toLocaleDateString("pt-BR")}
            </Text>
          </View>
        </TouchableOpacity>


        {expandido && (
          <View style={styles.osContainer}>

            //TO DO: Isso precisa ser uma flatlist ou uma map

            <CardOS title="OS - Vazamento do refrigerador" status="Em andamento" />
            <CardOS title="OS - Vazamento do refrigerador" status="Em andamento" />

            <TouchableOpacity
              style={styles.botaoDetalhe}
              onPress={handlePress}
              activeOpacity={0.8}
            >
              <Text style={styles.textoBotao}>Ver mais detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
    </View>
  );
}
