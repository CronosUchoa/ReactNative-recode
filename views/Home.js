import React from 'react';
import {styles} from './Css';
import {  Text, View, Button } from 'react-native';

export default function Home(props)
{
    console.log(props);

  
    return(
        <View style={styles.container}>
            <Text style={styles.textao} >Esse App criado em React native tem como objetivo o aprendizado de conceitos.</Text>
            <Text style={styles.textao2}>Esse App vai mostrar 3 citações em forma de listas.</Text>
            <Button title='Citações' onPress={ ()=> props.navigation.navigate('Page')}/>
        </View>
    );
      

}