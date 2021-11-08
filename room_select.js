import React from "react";
import { View, StyleSheet }  from 'react-native';
import { Picker } from "@react-native-picker/picker";

export default App = () => {
    return(
        <View style = {styles.container}>
            <Picker style={styles.picker}>

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
        borderWidth: 1,
    }
})