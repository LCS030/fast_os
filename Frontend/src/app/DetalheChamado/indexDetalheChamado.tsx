import { Header } from "@/components/header/indexHeader";
import { router } from "expo-router";
import { View, Text } from "react-native";

export default function DetalheChamado(){
    
    return (
        <View>
            <Header leftIconName={'arrow-back'} onLeftIconPress={() => router.back()}/>
            <Text>Teste</Text>
        </View>
    )
}