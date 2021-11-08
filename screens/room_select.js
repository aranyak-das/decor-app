import React from "react";
import { View, StyleSheet, Text }  from 'react-native';
import { Picker } from "@react-native-picker/picker";

export default function App() {
    return(
        <View style = {styles.container}>
            <Text style={styles.welcome}>Choose a Room</Text>
            <Picker style={styles.picker}>
                <Picker.Item label="Living Room" value="Living Room"/>
                <Picker.Item label="Bedroom" value="Bedroom"/>
                <Picker.Item label="Kitchen" value="Kitchen"/>
                <Picker.Item label="Dining Hall" value="Dining Hall"/>
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    picker:{
        width: 300,
        height: 45,
        borderColor: 'blue',
        borderWidth: 2,   
    },
    welcome:{
        fontSize: 30,
        textAlign: 'center',
        margin: 50,
        color: "#000000",
        paddingBottom: 50,
    },
})