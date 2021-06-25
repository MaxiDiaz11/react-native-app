
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './screens/UserList';
import CreateUser from './screens/CreateUser';
import UserDetailScreen from './screens/UserDetailScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateUser" component={CreateUser}></Stack.Screen>
      <Stack.Screen name="UserList" component={UserList}></Stack.Screen>
      <Stack.Screen name="UserDetail" component={UserDetailScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
 
      <NavigationContainer>
        <MyStack></MyStack>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
