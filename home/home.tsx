import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App'; // Importa los tipos de rutas
import ContinueButton from './components/button';
import BackgroundImage from './components/background';

const Home = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <BackgroundImage />
      <View style={styles.textContainer}>
        <Image source={require('../assets/img/cars.jpeg')} style={styles.titleImage} />
        <ContinueButton onPress={() => navigation.navigate('MoviesScreen')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    bottom: 300,
    alignItems: 'center',
  },
  titleImage: {
    margin: 130,
    width: 300, // Ajusta el tamaño según sea necesario
    height: 120, // Ajusta el tamaño según sea necesario
    resizeMode: 'contain',
  },
});

export default Home;
