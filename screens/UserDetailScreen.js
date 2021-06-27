import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import {
  Alert,
  View,
  Button,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import firebase from "../database/firebase";

const UserDetailScreen = (props) => {
  const InitialState = {
    id: "",
    name: "",
    phone: "",
    email: "email",
  };
  const [user, setuser] = useState({});
  const [loader, setloader] = useState(true);

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    setuser({ ...doc.data(), id: doc.id });
    setloader(false);
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  const handleTextChange = (input, value) => {
    setuser({
      ...user,
      [input]: value,
    });
    console.log(user);
  };

  const deleteUserByID = async () => {
    const dbRef = firebase.db
      .collection("users")
      .doc(props.route.params.userId);
    await dbRef.delete();
    props.navigation.navigate("UserList");
  };

  const updateUser = async () => {
    const dbRef = firebase.db.collection("users").doc(user.id);
    await dbRef.set({
      name: user.name,
      phone: user.phone,
      email: user.email,
    });
    setuser(InitialState);
    props.navigation.navigate("UserList");
  };

  const openConfirmationAlert = () => {
    Alert.alert("Remove the user", "Are you sure?", [
      { text: "Yes", onPress: () => deleteUserByID() },
      { text: "No", onPress: () => console.log("Cancelado") },
    ]);
  };

  if (loader) {
    return (
      <View>
        <ActivityIndicator size="large" color="#9e9e9e"></ActivityIndicator>
      </View>
    );
  } else
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Name User"
            value={user.name}
            onChangeText={(value) => handleTextChange("name", value)}
          ></TextInput>
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Email User"
            value={user.email}
            onChangeText={(value) => handleTextChange("email", value)}
          ></TextInput>
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Phone User"
            value={user.phone}
            onChangeText={(value) => handleTextChange("phone", value)}
          ></TextInput>
        </View>
        <View>
          <Button
            title="Update User"
            style={styles.boton}
            onPress={() => updateUser()}
          ></Button>
        </View>
        <View>
          <Button
            color="red"
            title="Delete User"
            style={styles.boton}
            onPress={() => openConfirmationAlert()}
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

export default UserDetailScreen;
