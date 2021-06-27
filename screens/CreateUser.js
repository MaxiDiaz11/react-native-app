import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import firebase from "../database/firebase";

const CreateUser = (props) => {
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
      try {
        await firebase.db.collection("users").add({
          name: user.name,
          email: user.email,
          phone: user.phone,
        });
        props.navigation.navigate("UserList");
      } catch (error) {
        console.log(error);
      }
    }
  };

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
        <Button
          title="Save User"
          style={styles.boton}
          onPress={() => saveNewUser()}
        ></Button>
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
  boton: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default CreateUser;
