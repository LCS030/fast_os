// src/components/header/indexHeader.tsx
import { colors } from "@/styles/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import FastLogo from '../../assets/fast_Logo.png';
import { styles } from "./stylesHeader";

interface HeaderProps {
    // Ícone a ser exibido no canto esquerdo
    leftIconName?: 'logout' | 'arrow-back' | 'menu' | null; 

    onLeftIconPress?: () => void; 
}

export function Header({ leftIconName, onLeftIconPress }: HeaderProps) {

    const leftIcon = leftIconName && onLeftIconPress ? (
        <TouchableOpacity onPress={onLeftIconPress} style={styles.actionIconContainer}>
            <MaterialIcons name={leftIconName} size={28} color={colors.action.text} />
        </TouchableOpacity>
    ) : (
        <View style={styles.actionIconContainer} /> 
    );

    return (
    <View style={styles.container}>
        
        {leftIcon}
        
        <View style={styles.logoContainer}>
            <Image source={FastLogo} style={styles.logo} resizeMode="contain" />
        </View>        
    </View>
);
}
