 import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import Page from './views/Page'
import Home from './views/Home'
import Login from './views/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App(){

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Page" component={Page} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}




// export default function App() {
//   const [nome, setNome] = useState('');
//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const [quantProd, setQuantProd]=useState(0)

//   const cadastro = () => {
//     Alert.alert('sua nome é ' + nome);
//     Alert.alert('sua email é ' + email);
//     Alert.alert('sua senha é ' + senha);

//   }

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden/>
//       <Image source={require('./assets/lion.jpg')} style={styles.logo}/>
//       <Page name='Cronos Uchoa' prod={quantProd}></Page>
     
//       
     
//       <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
//           <Text>Cadastrar</Text>
//         </TouchableOpacity>
//         <Button title='adicionar produtos' onPress={()=>setQuantProd(quantProd+1)}/>

//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// }


