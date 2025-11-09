import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { listarChamados } from "@/api/chamados";
import { CardChamado } from "@/components/cardChamado/indexCardChamado";
import { styles } from "./stylesChamados";
import { colors } from "@/styles/Colors";
import { Header } from "@/components/header/indexHeader";
import { router } from "expo-router";

export default function Chamados() {
  const [chamados, setChamados] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const carregarChamados = async () => {
    try {
      console.log("🔄 Carregando chamados...");
      const resposta = await listarChamados();

      if (resposta && Array.isArray(resposta)) {
        console.log("✅ Chamados recebidos:", resposta);
        setChamados(resposta);
      } else {
        console.warn("⚠️ Resposta inesperada:", resposta);
        setErro("Formato de resposta inválido da API.");
      }
    } catch (error) {
      console.error("❌ Erro ao carregar chamados:", error);
      setErro("Erro ao carregar os chamados. Verifique sua conexão.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarChamados();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color={colors.blue[900]} />
      </View>
    );
  }

  if (erro) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <Text style={{ color: "red", fontSize: 16 }}>{erro}</Text>
      </View>
    );
  }

  if (!chamados.length) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <Text style={{ color: "#666", fontSize: 16 }}>Nenhum chamado encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <Header leftIconName={'arrow-back'} onLeftIconPress={() => router.back()}/>
      <View style={styles.container}>
        <ScrollView style={{marginTop: 20}}>
        {chamados.map((item) => (
          <CardChamado key={item.id} chamado={item} />
        ))}
      </ScrollView>
      </View>
    </View>
    
  );
}
