import React, { useState } from 'react';
    import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
    import { useNavigation, NavigationProp } from '@react-navigation/native';
    import axios from 'axios'; 
    import { RootStackParamList } from '../App'; 
    import BackgroundLogin from './backgroundLogin'; // 

    const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
        const response = await axios.post('http://10.0.2.16:8081/auth/login', {
            username,
            password,    
        });

        if (response.status === 200) {
            navigation.navigate('Home');
        } 
        } catch (error) {
        Alert.alert('Login fallido', 'Ocurrio un error.');
        }
    };

    return (
        <View style={styles.container}>
        <BackgroundLogin />
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.titleContainer}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/c4/b8/71/c4b87129de273c20126e8a5ff54f06d0.jpg' }} 
                style={styles.circleImage}
            />
            <Text style={styles.title}>LOGIN</Text>
            </View>
            <View style={styles.formContainer}>
            <TextInput
                placeholder="Usuario"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Contrasena"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
            <Text style={styles.createAccountText}>
                <Text style={styles.createAccountLink} onPress={() => navigation.navigate('RegisterScreen')}>No tienes cuenta? !REGISTRATE AHORA!</Text>
            </Text>
            </View>
        </ScrollView>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 42,
        color: 'white',
        marginVertical: 20,
    },
    circleImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        borderWidth: 2, 
        borderColor: 'black',
    },
    formContainer: {
        backgroundColor: 'transparent', 
        padding: 20,
        borderRadius: 10,
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 15,
        opacity: 0.6,
    },
    button: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    createAccountText: {
        color: '#fff',
        textAlign: 'center',
    },
    createAccountLink: {
        color: 'white',
        fontWeight: 'bold',
    },
    });

    export default LoginScreen;