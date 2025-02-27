import { Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import icons from '../../constants/icons.js';
import { styles } from './homeStyle.js';

export default function Home(props) {
    function OpenPasenger() {
        props.navigation.navigate('Passenger');
    }
    function OpenRide() {
       props.navigation.navigate('Driver');
    }
    return (
        <ImageBackground source={icons.bg} resizeMode='cover' style={styles.bg}>
            <Image style={styles.logo2} source={icons.logo2} />

            <TouchableOpacity style={styles.btn} onPress={OpenPasenger}>
                <Image style={styles.img} source={icons.pass} />
                <Text style={styles.title}>Passageiro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={OpenRide}>
                <Image style={styles.img} source={icons.driver} />
                <Text style={styles.title}>Motorista</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};