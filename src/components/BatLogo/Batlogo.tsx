import batLogo from '../../../assets/bat-logo.png';
import { Image, View, Text } from 'react-native';
import { styles } from './BatLogoStyles';

export default function BatLogo() {
    return (
        <>
            <Text style={styles.title}>
                BAT PASS GENERATOR
            </Text>
            <Image source={batLogo} style={styles.logo} />
        </>
        
    )
}