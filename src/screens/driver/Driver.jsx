import MyButton from '../../components/myButton/MyButton.jsx'
import { styles } from './DriverStyle.js';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { icons } from '../../constants/icons.js';

export default function Driver(props) {
    
        function ClickRide(id) {
            props.navigation.navigate('ride-detail');
        }
    
    return (
        <View style={styles.container}>
            <FlatList keyExtractor={(ride) => ride.ride_id} showsVerticalScrollIndicator={false} renderItem={(item) =>{
                return <TouchableOpacity style={styles.rider} onPress={() => ClickRide(item.ride_id)}>
                    <View style={styles.containerName}>
                        <Image source={icons.car} style={styles.car} />
                        <Text style={styles.name}>{item.passager_name}</Text>
                    </View>
                    <Text style={styles.address}>{item.pickup_address}</Text>
                    <Text style={styles.address}>{item.dropoff_address}</Text>
                </TouchableOpacity>;
            }}/>
        </View>
    );
};