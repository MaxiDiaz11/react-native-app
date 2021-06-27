import React, { useEffect, useState } from "react";
import { Button, ScrollView } from "react-native";
import firebase from "../database/firebase";
import { ListItem, Avatar } from "react-native-elements";

const UserList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapShots) => {
      const usuarios = [];

      querySnapShots.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        usuarios.push({
          id: doc.id,
          name,
          phone,
          email,
        });
      });

      setUsers(usuarios);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        title="Create User"
        onPress={() => {
          props.navigation.navigate("CreateUser");
        }}
      ></Button>
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() =>
              props.navigation.navigate("UserDetail", {
                userId: user.id,
              })
            }
          >
            <ListItem.Chevron></ListItem.Chevron>
            <Avatar
              rounded
              source={{
                uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
              }}
            ></Avatar>
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserList;
