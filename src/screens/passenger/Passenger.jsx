import MyButton from '../../components/myButton/MyButton.jsx';
import MapView, { PROVIDER_DEFAULT, Marker } from 'react-native-maps';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import { styles } from './PassengerStyles.js';
import { useEffect, useState } from 'react';
import icons from '../../constants/icons.js'
import { getCurrentPositionAsync, requestForegroundPermissionsAsync, reverseGeocodeAsync } from 'expo-location';

export default function Passenger(props) {

    const [myLocation, setMyLocation] = useState({});
    const [title, setTitle] = useState("");
    const [pickupAddress, setPickupAddress] = useState('');
    const [dropoffAddress, setDropoffAddress] = useState('');
    
    async function RequestRideFromUser() {
        // Acessa dados na API...
        const response = {};

        return response;
    }

    async function RequestPermissionAndGetLocation() {
        const { granted } = await requestForegroundPermissionsAsync();

        if(granted) {
            const currentPosition = await getCurrentPositionAsync();

            if(currentPosition.coords){
                return currentPosition.coords;
            } else {
                return {};
            }
        } else {
            return {};
        }
    }

    async function RequestAddressName(lat, long) {
        const response = await reverseGeocodeAsync({
            latitude: lat,
            longitude: long
        });
        
        if (response.length > 0 && response[0].street && response[0].streetNumber && response[0].district) {
            setPickupAddress(`${response[0].street}, ${response[0].streetNumber} - ${response[0].district}`);
        }
    }

    async function LoadScreen() {
        // Buscar dados de corrida aberta na API para o User...
        const response = await RequestRideFromUser();
        
        console.log(pickupAddress);
        if (!response.ride_id) {

            const location = await RequestPermissionAndGetLocation();

            if (location.latitude){
                setTitle('Encontre a sua carona...');
                setMyLocation(location);
                RequestAddressName(location.latitude, location.longitude);
            } else Alert.alert('Não foi possível obter sua localização')
            
        } else {

        }
    }

    useEffect(() =>{
        LoadScreen();
    }, []);

    return (
    <View style={styles.container}>
        {myLocation.latitude ? <>
            <MapView 
                style={styles.map} 
                provider={PROVIDER_DEFAULT} 
                initialRegion={{
                    latitude: myLocation.latitude, 
                    longitude: myLocation.longitude, 
                    latitudeDelta: 0.004, 
                    longitudeDelta: 0.004
                }}
            >
                <Marker coordinate={{
                    latitude: myLocation.latitude, 
                    longitude: myLocation.longitude,
                    }}
                    title='teste'
                    description='teste'
                    image={icons.loc}
                    style={styles.marker}
                />
            </MapView>
            <View style={styles.footer}>
                <View style={styles.footerFields}>
                    <Text style= {styles.footerText}>{title}</Text>
                </View>
                <View style={styles.footerFields}>
                    <Text>Origem</Text>
                    <TextInput style={styles.input} value={pickupAddress} />
                </View>
                <View style={styles.footerFields}>
                    <Text>Destino</Text>
                    <TextInput style={styles.input} value={dropoffAddress} />
                </View>

            </View>
            <MyButton 
                text={'Confirmar'} theme='default'
            />
        </>
        : <View style={styles.loading}>
            <ActivityIndicator size='large'/>
        </View>} 
    </View>
    );
};