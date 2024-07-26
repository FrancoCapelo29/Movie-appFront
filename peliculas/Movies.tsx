import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Asegúrate de importar Text
import axios from 'axios';
import MoviesHeader from './components/MoviesHeader';
import MoviesBody from './components/MoviesBody';
import MoviesFooter from './components/MoviesFooter';
import BackgroundMovies from './components/Background';

const MoviesScreen = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://10.0.2.16:8081/peliculas');
        setMovies(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError('Failed to load movies');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <View style={styles.container}><Text>Loading...</Text></View>;
  if (error) return <View style={styles.container}><Text>{error}</Text></View>;

  return (
    <View style={styles.container}>
      <BackgroundMovies />
      <MoviesHeader />
      <MoviesBody movies={movies} />
      <MoviesFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MoviesScreen;
