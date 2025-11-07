import { listarChamados } from "@/api/chamados";
import { CardChamado } from "@/components/cardChamado/indexCardChamado";
import { Header } from "@/components/header/indexHeader";
import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { styles } from "./stylesChamados";

interface OS {
    id: number;
    codigo: string;
  }
  interface Chamado {
    id: number;
    titulo?: string;
    nome_cliente?: string;
    visitas?: OS[];
  }

export default function Chamados() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const carregarChamados = async () => {
        setLoading(true);
        try {
          // Chama a função que consome a API
          const data = await listarChamados();

          // Atualiza o estado apenas se o componente ainda estiver ativo
          if (isActive) setChamados(data);
        } catch (error) {
          console.error("Erro ao buscar chamados:", error);
        } finally {
          setLoading(false);
        }
      };

      carregarChamados();

      // Cleanup quando sai da tela
      return () => {
        isActive = false;
      };
    }, [])
  );

  // Enquanto carrega, mostra um indicador
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header leftIconName="arrow-back" onLeftIconPress={() => router.back()} />
      
        <FlatList
        data={chamados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <CardChamado
            titulo={item.titulo || item.nome_cliente || `Chamado #${item.id}`}
            osList={item.visitas || []}
            onVerPress={() => router.push(`./indexDetalheChamado/${item.id}`)}
            />
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
        />
    </View>
  );
}
