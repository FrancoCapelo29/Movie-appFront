import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import axios from 'axios';
import { RootStackParamList } from '../../App';

const MoviesCreate = () => {
  const [title, setTitle] = useState('');
  const [timeMovies, setTimeMovies] = useState('');
  const [director, setDirector] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleCreate = async () => {
    try {
      const response = await axios.post('http://10.0.2.16:8081/peliculas', {
        title,
        timeMovies,
        director
      });
      console.log('Película creada:', response.data);
      // Navega de regreso a la pantalla de películas (MoviesScreen)
      navigation.navigate('MoviesScreen');
    } catch (error) {
      console.error('Error creando la película:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FILMS</Text>
      <View style={styles.horizontalContainer}></View>
      <TextInput
        style={styles.input}
        placeholder="Nombre de la pelicula"
        placeholderTextColor="#aaa"
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.horizontalContainer}>
        <TextInput
          style={styles.smallInput}
          placeholder="Duracion"
          placeholderTextColor="#aaa"
          value={timeMovies}
          onChangeText={setTimeMovies}
        />
        <TextInput
          style={styles.smallInput}
          placeholder="Director"
          placeholderTextColor="#aaa"
          value={director}
          onChangeText={setDirector}
        />
      </View>
      <Pressable style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Crear Película</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    gap: 30,
    justifyContent: 'center',
  },
  header: {
    padding: 10,
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    paddingRight: 100,
    width: 1000,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 20,
    color: 'white',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    height: 50,
  },
  smallInput: {
    height: 40,
    borderColor: 'white',
    borderWidth: 2,
    paddingHorizontal: 10,
    flex: 1,
    marginRight: 10,
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MoviesCreate;
