import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Login Page</Text> */}
      <Text style={styles.welcome}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        />
        <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.userBtn}
          >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userBtn}
          >
          <Text style={styles.btnText}>SignUp</Text>
        </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64B5F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 50,
    color: "#fff",
    paddingBottom: 50,
    fontFamily: 'montserrat-bold',
  },
  input: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 10,
  },
  userBtn: {
    backgroundColor: "#0D47A1",
    padding: 15,
    width: "45%",
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    color: "#ffffff",
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "90%",
  },
});
