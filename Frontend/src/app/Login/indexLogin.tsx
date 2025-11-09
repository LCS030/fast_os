import { Input } from "@/components/input/indexInput";
import { Text, View, Alert } from "react-native";

import { styles } from "@/app/Login/stylesLogin";
import { Button } from "@/components/button/buttonIndex";
import { Header } from "@/components/header/indexHeader";
import { router } from "expo-router";

import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "@/api/login";
import { AxiosError } from 'axios';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (isLoading) return;
    setIsLoading(true);
    
    try {
      const response = await login(email, password);

      const token = response.data.access_token;

      await AsyncStorage.setItem('userToken', token);

      router.replace("../Home/indexHome"); 

    } 
    catch (error) {

      let errorMessage = "Erro ao tentar logar.";

      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.detail || "Email ou senha incorretos.";
      } 
      else if (error instanceof Error) {
        errorMessage = error.message;
      }

      Alert.alert("Falha no Login", errorMessage);
      console.error(error);
      
    } 
    finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.title}>LOGIN</Text>

        <View style={styles.form}>
          <Input
            placeholder="Email" 
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"            
          />
          <Input 
            placeholder="Senha" 
            onChangeText={setPassword}
            value={password}
            autoCapitalize="none"
          />
          <Button
            title={isLoading ? "Entrando..." : "Entrar"} 
            width="40%" 
            onPress={handleLogin}
            disabled={isLoading}
          />
        </View>
      </View>
    </View>
  );
}
