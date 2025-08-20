import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 32,
        backgroundColor: '#000',
        borderRadius: 5,
        elevation: 5,
        marginTop: 5,
        cursor: 'pointer'
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 600,
        letterSpacing: 0.25,
        color: '#e5bf3c'
    },
    passInputContainer: {
        width: '100%'
    },
})