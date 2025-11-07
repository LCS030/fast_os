import { styles } from "@/components/button/stylesIndex";
import { Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";

type Props = TouchableOpacityProps & {
    title: string
    width?: ViewStyle["width"]
    height?: ViewStyle["height"]
}

export function Button({title, width, height, ...rest}: Props) {
    return (
        <TouchableOpacity 
            style={[
                styles.container, 
                (width ? { width } : null), 
                (height ? { height } : null)
            ]} 
            activeOpacity={0.7} {...rest}>
                
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}