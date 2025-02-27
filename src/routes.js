import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login/Login.jsx';
import Signup from './screens/signup/Signup.jsx';
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
                    name='Login' 
                    component={Login} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name='Signup' 
                    component={Signup} 
                    options={{ headerShown: false }}
                />
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
                <Stack.Screen 
                    name='Ride-detail' 
                    component={RideDetail} 
                    options={{ headerTitle: '', headerTransparent: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}