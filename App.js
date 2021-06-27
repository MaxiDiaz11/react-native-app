
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
      <Stack.Screen name="UserList" component={UserList} options={{ title: 'Lista de Usuarios' }}></Stack.Screen>
      <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Crear Usuario' }}></Stack.Screen>
      <Stack.Screen name="UserDetail" component={UserDetailScreen} options={{ title: 'Detalle de Usuarios' }}></Stack.Screen>
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
