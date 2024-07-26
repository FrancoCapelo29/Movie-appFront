import React from 'react';
import { Image, StyleSheet } from 'react-native';

const BackgroundRegister = () => {
  return (
    <Image
      source={{ uri: 'https://i.pinimg.com/564x/a8/3a/0a/a83a0aabec6bca4eb846579296c2d566.jpg' }} // Reemplaza con tu URL
      style={styles.backgroundImage}
    />
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity:1,

  },
});

export default BackgroundRegister;
