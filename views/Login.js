import React from 'react';
import { Text, View, TextInput, Button,Image} from 'react-native';
import {styles} from './Css';

export default function Login(props)
{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/icon.png')} style={styles.logo}/>
            <Text>created by Cronos Uchoa</Text>
            <TextInput style={styles.input} placeholder="Digite seu usuário" onChangeText={text=>setNome(text)}/>
            <TextInput style={styles.input} placeholder="Digite sua senha" onChangeText={text=>setSenha(text)} secureTextEntry={true}/>
            <Button style={styles.btnCadastro} title='Entrar' onPress={ ()=> props.navigation.navigate('Home')}/>
        </View>
    );
}