import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './HomeStyles';
import BatLogo from '../../components/BatLogo/Batlogo';
import BatPassInput from '../../components/BatPassInput/BatPassInput';
import BatButton from '../../components/BatButton/BatButton';

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>
            <View style={styles.btnContainer}>
                <BatButton />
            </View>
            
            <StatusBar style="auto" />
        </View>
    )
}
