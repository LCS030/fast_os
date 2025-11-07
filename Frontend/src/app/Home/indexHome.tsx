import { Header } from "@/components/header/indexHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./stylesHome";

export default function Home () {
    const handleLogout = () => {
        console.log("Logout Clicado. Implementar lógica aqui.");
        // #ToDo navigation.navigate('Login'); // Ação real
    };
    
    return(
        <View>                  
            <Header leftIconName='logout' onLeftIconPress={handleLogout} />

            <View style={styles.container}>
                <View style={styles.block}>

                    <TouchableOpacity activeOpacity={0.5} style={styles.card} onPress={() => router.navigate("./Chamados/indexChamados")}>
                        <MaterialIcons name="list" style={styles.icon} />
                        <Text style={styles.cardText}>Chamados</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity activeOpacity={0.5} style={styles.card}>
                        <MaterialIcons name="build" style={styles.icon}/>
                        <Text style={styles.cardText}>Em andamento</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
        
    )
}