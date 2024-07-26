    import React from 'react';
    import { Image, StyleSheet } from 'react-native';

    const BackgroundImage = () => {
    return (
        <Image
        source={{ uri: 'https://i.pinimg.com/564x/74/09/9e/74099e66efd5cb11855bec2d7734e945.jpg' }}
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

    export default BackgroundImage;
