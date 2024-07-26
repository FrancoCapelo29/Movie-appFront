import React from 'react';
import { Image, StyleSheet } from 'react-native';

const BackgroundScenes = () => {
return (
    <Image
    source={{ uri: 'https://i.pinimg.com/564x/ab/d4/6c/abd46cc4386c840bc7ed2e18497d7ec2.jpg' }}
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

export default BackgroundScenes;
