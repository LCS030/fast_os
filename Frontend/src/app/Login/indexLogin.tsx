import { Input } from "@/components/input/indexInput";
import { Text, View } from "react-native";

import { styles } from "@/app/Login/stylesLogin";
import { Button } from "@/components/button/buttonIndex";
import { Header } from "@/components/header/indexHeader";
import { router } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.title}>LOGIN</Text>

        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input placeholder="Senha" secureTextEntry />
          <Button title="Entrar" width="40%" onPress={() => router.navigate("../Home/indexHome")} /* To Do: Isso executará quando a requisição da API der certo*//>
        </View>
      </View>
    </View>
  );
}
