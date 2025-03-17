import { TouchableOpacity, Text } from "react-native";
import { styles } from './myButtonStyle.js';

export default function MyButton(props){
    return (
        <TouchableOpacity style={props.theme == 'red' ? styles.btnRed : styles.btnYellow}>
            <Text style={props.theme == 'red' ? styles.textLight : styles.textDark}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
};