import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Styles';
import BatLogo from '../../components/BatLogo/Batlogo';

export default function Home() {
    return (
        <View style={styles.container}>
            <View>
                <BatLogo />
            </View>
            
            <Text>Minha primeira screen em react-native.. Agora com tudo no component Home.. Após separação do estilo..</Text>
            <StatusBar style="auto" />
        </View>
    )
}
