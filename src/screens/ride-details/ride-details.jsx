import MyButton from '../../components/myButton/MyButton.jsx';
import MapView, { PROVIDER_DEFAULT, Marker } from 'react-native-maps';
import { View, Text, TextInput } from 'react-native';
import { styles } from './ride-detailsStyles.js';
import { useState } from 'react';
import icons from '../../constants/icons.js'

export default function RideDetail(props) {
    const [myLocation, setMyLocation] = useState({latitude: 20, longitude: 20});

    return (
    <View style={styles.container}>
        <MapView 
            style={styles.map} 
            provider={PROVIDER_DEFAULT} 
            initialRegion={{
                latitude: -23.561747, 
                longitude: -46.656244, 
                latitudeDelta: 0.004, 
                longitudeDelta: 0.004
            }}
        >
            <Marker coordinate={{
                latitude: -23.561747, 
                longitude: -46.656244,
                }}
                title='teste'
                description='teste'
                image={icons.loc}
                style={styles.marker}
            />
        </MapView>
        <View style={styles.footer}>
            <View style={styles.footerFields}>
                <Text style={styles.footerText}>Encontre sua Carona</Text>
            </View>
            <View style={styles.footerFields}>
                <Text>Origem</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.footerFields}>
                <Text>Destino</Text>
                <TextInput style={styles.input} />
            </View>
        </View>
        <MyButton 
            text={'Aceitar'}
        />
    </View>
    );
};