import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import BackgroundRegister from './backgroundRegister';
import axios from 'axios'; 

const RegisterScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); 

    const handleRegister = () => {
        axios.post('http://10.0.2.16:8081/auth/register', {
            firstName,
            lastName,
            username,
            password,
        })
        .then(response => {
            setMessage('Tu cuenta ha sido creada con éxito.'); 
            setTimeout(() => {
                navigation.navigate('LoginScreen');
            }, 2000); 
        })
        .catch(error => {
            if (error.response) {
                setMessage(`Hubo un problema al registrar tu cuenta: ${error.response.data.message || 'Error desconocido'}`); 
            } else if (error.request) {
                setMessage('No se recibió respuesta del servidor.');
            } else {
                setMessage(`Hubo un problema al hacer la solicitud: ${error.message}`);
            }
            console.error(error);
        });
    };

    return (
        <View style={styles.container}>
            <BackgroundRegister />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.titleContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/c4/b8/71/c4b87129de273c20126e8a5ff54f06d0.jpg' }} 
                        style={styles.circleImage}
                    />
                    <Text style={styles.title}>REGISTRO</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        placeholder="Nombre"
                        value={firstName}
                        onChangeText={setFirstName}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Apellido"
                        value={lastName}
                        onChangeText={setLastName}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Contraseña"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>REGÍSTRATE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                    {message ? <Text style={styles.message}>{message}</Text> : null} 
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
        backgroundColor: 'black',
        opacity: 1,
    },
    title: {
        fontSize: 32,
        color: 'red',
        marginVertical: 20,
    },
    circleImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 20,
        borderWidth: 0.51,
        borderColor: 'white',
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
        opacity: 0.7,
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
    loginText: {
        color: 'red',
        textAlign: 'center',
    },
    message: {
        color: 'red', // Ajusta el color según tu diseño
        textAlign: 'center',
        marginTop: 20,
    },
});

export default RegisterScreen;
