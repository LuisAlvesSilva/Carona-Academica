import { View, Text, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import icons from '../../constants/icons.js';
import { styles } from './loginStyle.js';
import MyButton from '../../components/myButton/MyButton.jsx';

export default function Login(props) {

    function OpenSignup() {
        props.navigation.navigate('Signup');
    }

    return (
        <ImageBackground source={icons.bg} resizeMode='cover' style={styles.bg}>
            <Image style={styles.logo2} source={icons.logo2} />
            <View style={styles.footer}>
                <View style={styles.footerFields}>
                    <Text style={styles.title}>Entre na sua conta</Text>
                    <TextInput style={styles.input} placeholder='E-mail'/>
                    <TextInput style={styles.input} placeholder='Senha'/>
                    <TouchableOpacity>
                        <MyButton text={'Login'} />
                    </TouchableOpacity>
                    <Text>Caso não tenha uma conta</Text>
                    <TouchableOpacity onPress={OpenSignup} style={styles.btnYellow}>
                        <Text>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};