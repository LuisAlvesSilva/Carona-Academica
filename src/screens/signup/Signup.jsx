import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import icons from '../../constants/icons.js';
import { styles } from './signupStyle.js';

export default function Signup(props) {
    return (
        <ImageBackground source={icons.bg} resizeMode='cover' style={styles.bg}>
                    <Image style={styles.logo2} source={icons.logo2} />
                    <View style={styles.footer}>
                        <View style={styles.footerFields}>
                            <Text style={styles.title}>Crie sua conta</Text>
                            <TextInput style={styles.input} placeholder='Nome'/>
                            <TextInput style={styles.input} placeholder='E-mail'/>
                            <TextInput style={styles.input} placeholder='Telefone'/>
                            <TextInput style={styles.input} placeholder='Senha'/>
                            <TouchableOpacity style={styles.btnYellow}>
                                <Text>Cadastre-se</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
        </ImageBackground>
    );
};