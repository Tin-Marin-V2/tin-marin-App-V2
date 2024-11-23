import React  from 'react';
import { StyleSheet, Linking, View, TouchableOpacity, } from 'react-native';
import { IconButton, Text, Title } from 'react-native-paper';
import Colors from '../constants/Colors';
import ListItem from '../components/ListItem'; // Importa el nuevo componente de lista

/**
*@param {prop} route
*@param {prop} navigation 
*@see https://reactnavigation.org/docs/route-prop/
*@return {SafeAreaView}
*/
const InducScreen =  ({ navigation }) => {
   
  const guide="https://www.youtube.com/watch?v=VsjTbrmRkIs ";
  const induccion="https://www.youtube.com/watch?v=AqtzkW-QBTo";
  const doc="https://tinmarin-my.sharepoint.com/:b:/r/personal/srafael_tinmarin_org/Documents/Informaci%C3%B3n%20para%20App%20Formativa%20Tin%20Marin/Dem%C3%A1s%20informaci%C3%B3n/Inducci%C3%B3n/Inducci%C3%B3n%20Oficial%202024%20PDF.pdf?csf=1&web=1&e=tJHhot";


   return(
        <View style={styles.view}>
          <Text style={styles.title}>Inducción Contenido</Text>
         <ListItem
           title="Inducción Oficial"
           icon="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg" // Usa una URL de ícono
           //https://img.icons8.com/color/48/000000/bookmark.png
           url={doc}
            />

        <ListItem
          title="En los pies de un guia"
          icon="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg" // Usa una URL de ícono
          //https://img.icons8.com/color/48/000000/bookmark.png
          url={guide}
           />

       <ListItem
         title="Inducción del programa"
         icon="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg" // Usa una URL de ícono
         //https://img.icons8.com/color/48/000000/bookmark.png
         url={induccion}
          />

        </View>
    );
  

};

/*
 
*/
const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 15,
  },
  view: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
    paddingHorizontal: 25,
  },
  btnStyle: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin:10,
    width: 220,
    height: 40,
  },
  title: {
    fontFamily: 'BubblegumSans-Regular',
    marginTop: 20,
    fontSize: 30,
    color: '#566573',
  }
});


export default InducScreen;
