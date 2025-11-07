// styles.ts
import { colors } from '@/styles/Colors'; // Importação das suas cores
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray[100], // Fundo claro da tela
        padding: 20,
    },

    block: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },

    card: {
        backgroundColor: colors.red[500],
        width: 170,
        height: 150,
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.gray[950],
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,
        marginHorizontal: 10,
    },
    
    icon: {
        fontSize: 60,
        color: colors.action.text,
        marginBottom: 5,
    },

    cardText: {
        color: colors.action.text,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
    },

    badge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: colors.blue[900],
        color: colors.action.text,
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 10,
        overflow: 'hidden',
    }
});