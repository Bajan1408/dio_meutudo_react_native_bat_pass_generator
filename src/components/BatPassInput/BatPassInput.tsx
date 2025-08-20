import { TextInput } from 'react-native';
import { styles } from './BatPassInputStyles';

interface BatPassInputProps {
    pass: string;
}

export default function BatPassInput(props: BatPassInputProps) {
    return (
        <TextInput placeholder='pass' style={styles.inputPass} value={props.pass} />
    )
}