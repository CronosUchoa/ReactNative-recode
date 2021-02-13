import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default function Page()
{   

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: '"ENCONTRE O QUE VOCÊ AMA E DEIXE QUE ISSO TE MATE!" - Bukowski',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: '“Na vida, ao contrário do xadrez, o jogo continua após o xeque-mate..” - Isaac asimov',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: '“Não é tanto por eu estar confiante que os cientistas têm razão, mas mais por estar confiante que os que não-cientistas estão errados.” -Isaac asimov ',
        },
      ];
    
      const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
      

    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    
   
    return(
        <SafeAreaView style={styles.container} >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );

}