import React from 'react';
import { Image, StyleSheet } from 'react-native';

const BackgroundMovies = () => {
return (
    <Image
    source={{ uri: 'https://i.pinimg.com/564x/da/1e/ab/da1eab3b271e2ead0e641c70493968e1.jpg' }}
    style={styles.backgroundImage}
    />
);
};

const styles = StyleSheet.create({
backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
},
});

export default BackgroundMovies;
