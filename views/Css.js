import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#9665',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      width:150,
      height:150,
      borderRadius:100
    },
    input:{
      width:'100%',
      height:40,
      backgroundColor:'#fff',
      borderRadius:50,
      padding:10,
      marginBottom:10
    },
    btnCadastro:{
      width:100,
      height:40,
      backgroundColor:'#fff',
      borderRadius:50,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:10
    },
    textao:{
      
      backgroundColor:'#fff',
      textAlign:'center',
      marginBottom:20
    }, 
    textao2:{
      backgroundColor:'steelblue',
      fontSize:20,
      textAlign:'center',
      marginBottom:15,
      color:'#fff'
    }
   
  
  });

  export {styles};