// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home/home';
import MoviesScreen from './peliculas/Movies';
import MoviesCreate from './peliculas/components/MoviesCreate';
import ScenesCreate from './Escenas/components/ScenesCreate';
import CharacterCreate from './personajes/components/CharactersCeate';
import CharacterScreen from './personajes/Characters';
import RegisterScreen from './login/register';
import LoginScreen from './login/login';
import ScenesScreen from './Escenas/ecenas';

export type RootStackParamList = {
  Home: undefined;
  MoviesScreen: undefined;
  MoviesCreate: undefined;
  ScenesScreen: undefined;
  ScenesCreate: undefined;
  CharacterScreen: undefined;
  CharacterCreate: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
        <Stack.Screen name="MoviesCreate" component={MoviesCreate} />
        <Stack.Screen name="ScenesCreate" component={ScenesCreate} />
        <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
        <Stack.Screen name="CharacterCreate" component={CharacterCreate} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ScenesScreen" component={ScenesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
