import React, { useState } from "react";
import { Button, Text, Pressable, View } from "react-native";
import { styles } from './BatButtonStyles';
import BatPassInput from "../BatPassInput/BatPassInput";
import genPass from '../../services/genPassService';
import * as Clipboard from 'expo-clipboard';

export default function BatButton() {
    const [pass, setPass] = useState('');

    function handleGenerateButton() {
        setPass(genPass());
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(pass);
    }

    return (
        <>
            <View style={styles.passInputContainer}>
                <BatPassInput pass={pass} />
            </View>
            <Pressable style={styles.button} onPress={() => handleGenerateButton()}>
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => handleCopyButton()}>
                <Text style={styles.text}>✔ COPY</Text>
            </Pressable>  
        </>
    )
}