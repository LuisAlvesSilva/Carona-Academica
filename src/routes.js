import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home/Home.jsx';
import Passenger from './screens/passenger/Passenger.jsx';
import Driver from './screens/driver/Driver.jsx';
import RideDetail from "./screens/ride-details/ride-details.jsx";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Home' 
                    component={Home} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name='Passenger' 
                    component={Passenger} 
                    options={{ headerTitle: '', headerTransparent: true }}/>
                <Stack.Screen 
                    name='Driver' 
                    component={Driver} 
                    options={{ headerTitle: 'Viagens Disponíveis',  headerTitleAlign: 'center'}}/>
            </Stack.Navigator>
            <Stack.Screen name='ride-detail' component={RideDetail} options={{ headerTitle: '', headerTransparent: true }} />
        </NavigationContainer>
    )
}