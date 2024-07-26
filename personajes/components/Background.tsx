import React from 'react';
import { Image, StyleSheet } from 'react-native';

const BackgroundCharacters = () => {
return (
    <Image
    source={{ uri: 'https://i.pinimg.com/736x/2a/a2/34/2aa2343a244c3bee24a342e551919fd0.jpg' }}
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

export default BackgroundCharacters;
