import * as React from "react";
import { View, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login';
import RoomSelect from './screens/room_select';

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

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="RoomSelect" component={RoomSelectScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;