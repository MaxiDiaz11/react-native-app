import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import firebase from "../database/firebase";

const CreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleTextChange = (input, value) => {
    setUser({
      ...user,
      [input]: value,
    });
    console.log(user);
  };

  const saveNewUser = async () => {
    if (user.name === "") {

      alert("Provee un nombre");
    } else {
      await firebase.firestore().collection("users").add({
        name: user.name,
        email: user.email,
        phone: user.phone,
      });

      alert("guardado");
    }
  };

  firebase.auth().onAuthStateChanged(user=>{
    console.log(user)
  })

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name User"
          onChangeText={(value) => handleTextChange("name", value)}
        ></TextInput>
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email User"
          onChangeText={(value) => handleTextChange("email", value)}
        ></TextInput>
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone User"
          onChangeText={(value) => handleTextChange("phone", value)}
        ></TextInput>
      </View>
      <View>
        <Button title="Save User" onPress={() => saveNewUser()}></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default CreateUser;
