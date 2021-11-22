import * as React from "react";
import { View, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login';
import RoomSelect from './screens/room_select';
import Cam from './screens/cam';

function LoginScreen({ navigation }) {
    return(
        <Login />
        
    );
}

function RoomSelectScreen({ navigation }) {
    return(
        <RoomSelect />
    );
}

function CameraScreen({ navigation }) {
    return(
        <Cam />
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="RoomSelect" component={RoomSelectScreen}/>
                <Stack.Screen name="Cam" component={CameraScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;