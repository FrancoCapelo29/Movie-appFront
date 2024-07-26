    // Movies/components/MoviesFooter.tsx
    import React from 'react';
    import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
    import { useNavigation } from '@react-navigation/native';
    import { NavigationProp } from '@react-navigation/native';
    import { RootStackParamList } from '../../App';
    const MoviesFooter = () => {
        const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handlePress = () => {
        navigation.navigate('MoviesCreate'); // Asegúrate de que el nombre sea correcto
    };

    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Image
            source={{ uri: 'https://i.pinimg.com/564x/c4/b8/71/c4b87129de273c20126e8a5ff54f06d0.jpg' }}
            style={styles.image}
            />
        </TouchableOpacity>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        paddingVertical: 10,
        alignItems: 'center',
        height: 100,
    },
    button: {
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    });

    export default MoviesFooter;
