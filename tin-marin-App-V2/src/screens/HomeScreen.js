import { noConflict } from 'lodash';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image
} from 'react-native';
//new image imports for the new menu design
import playground from '../assets/icons/playground.png';
import newnormality from '../assets/icons/newnormality.png';
import expression from '../assets/icons/expression.png';
import faq from '../assets/icons/faq.png';
import solidarity from '../assets/icons/solidarity.png';
import calendar from '../assets/icons/calendar.png';
import man from '../assets/icons/man.png';

//new images for the menu icons
import covidicon from '../assets/icons/covidicon.png';
import covidicon2 from '../assets/icons/covidicon2.png';
import conocenosicon from '../assets/icons/conocenosicon.png';
import sitiosicon from '../assets/icons/sitiosicon.png';
import inducicon from '../assets/icons/man.png';

import {
  selectButton
} from '../helpers/audio';
import ConocenosMas from '../assets/ConocenosMas.jpg';

/**
 * Pantalla Principal que contiene una lista de tarjetas con los accesos directos de los diferentes
 * módulos que posee la aplicación.
 * @param {prop} navigation - Contiene información básica de navegación
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @return {ScrollView} Regresa una layout con scroll vertical, y muestra la maquetación de la pantalla
 * @return {TouchableOpacity} Regresa un layout con el fin de dar la sensasion que se ha dado "tap" en la pantalla
 * @property {TouchableOpacity} onPressIn Se decidio poner la musica ahi ya que no acepta el onPress no ejecuta las dos funciones.
 * @property {TouchableOpacity} onPress propiedad la cual ejecuta la funcion de navegar con navigation. 
 * @property {ImageBackground} imageStyle propiedad para cambiar los estilos especificos del background
 * 
 *  */

const HomeScreen = ({ navigation }) => {
  return (
    
    <ScrollView  style={styles.scrollView}>
      <View style={styles.view}>

        <TouchableOpacity
          onPressIn={selectButton}
          onPress={() => {

            navigation.navigate('exhibits');
          }}
          style={styles.cardContainer}>
            <Image
              style = {{width:100, height:100}}
              resizeMode = "contain"
              source={playground}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Exhibiciones</Text>
              <Text style={styles.text2}>
                Únete a esta gran aventura y comparte la diversión con todos/as
              </Text>
            </View>
        </TouchableOpacity> 
        <TouchableOpacity
          onPressIn={selectButton}
          onPress={() => {
            navigation.navigate('covid');
          }}
          style={styles.cardContainer}>
            <Image
              style = {{width:100, height:100}}
              resizeMode = "contain"
              source={conocenosicon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.textYellow}>Salvaguarda</Text>
              <Text style={styles.text2}>
                Garanticemos el bienestar de la niñez
              </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={selectButton}
          onPress={() => {
            navigation.navigate('Induc');
          }}
          style={{ ...styles.cardContainer}}>
            <Image
              style = {{width:100, height:100}}
              resizeMode = "contain"
              source={inducicon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Inducción</Text>
              <Text style={styles.text2}>
               Conoce mas sobre nuestra familia Tin Marín
              </Text>
            </View>
        </TouchableOpacity>

         <TouchableOpacity
                  onPressIn={selectButton}
                  onPress={() => {
                    navigation.navigate('comments');
                  }}
                  style={styles.cardContainer}>
                    <Image
                      style = {{width:100, height:100}}
                      resizeMode = "contain"
                      source={expression}
                    />
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>Expresión</Text>
                      <Text style={styles.text2}>
                        Todo comunica. Descubre mas herramientas para transformar tus ideas
                      </Text>
                    </View>
         </TouchableOpacity>

        <TouchableOpacity
          onPressIn={selectButton}
          onPress={() => {
            navigation.navigate('FAQs');
          }}
          style={styles.cardContainer}>
            <Image
              style = {{width:100, height:100}}
              resizeMode = "contain"
              source={faq}
            />
            <View style={styles.textContainer}>
              <Text style={styles.textYellow}>Preguntas Frecuentes</Text>
              <Text style={styles.text2}>
                ¿Dudas? entra y te apoyamos a despejarlas
              </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={selectButton}
          onPress={() => {
            navigation.navigate('WebLinks');
          }}
          style={{ ...styles.cardContainer}}>
            <Image
              style = {{width:100, height:100}}
              resizeMode = "contain"
              source={sitiosicon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.textMorado}>Dinamicas</Text>
              <Text style={styles.text2}>
                Descubre ideas para hacer cada recorrido único e inolvidable
              </Text>
            </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

/**
 * @ignore
 */
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop:0,
    backgroundColor:'#FFF4BD',
  },
  view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  cardContainer: {
    margin: 2,
    padding: 10,
    width: Dimensions.get('window').width /2 -6,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
    
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 3,
  },
  textContainer: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  text: {
    fontFamily: 'Inter',
    color: '#E50E23',
    fontSize: 18,
    textAlign: "center",
    fontWeight: 'bold',
  },
  textYellow: {
    fontFamily: 'Inter',
    color: '#FABA00',
    fontSize: 18,
    textAlign: "center",
    fontWeight: 'bold',
  },
  textMorado: {
    fontFamily: 'Inter',
    color: '#93117D',
    fontSize: 18,
    textAlign: "center",
    fontWeight: 'bold',
  },
  text2: {
    fontFamily: 'Inter',
    color: '#393838',
    fontSize: 12,
    textAlign: "center"
  },
});

export default HomeScreen;
