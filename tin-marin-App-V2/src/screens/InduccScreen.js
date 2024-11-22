import React  from 'react';
import { StyleSheet, Linking, View, TouchableOpacity, } from 'react-native';
import { IconButton, Text, Title } from 'react-native-paper';
import Colors from '../constants/Colors';

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
        
        <TouchableOpacity
                  style={[styles.btnStyle]}
                  onPress={() => {
                    Linking.openURL(guide);
                    }
                  }>         
              <Text style={styles.textStyle}>En los pies de un guia </Text>
          </TouchableOpacity>     
          <TouchableOpacity
                  style={[styles.btnStyle]}
                  onPress={() => {
                    Linking.openURL(induccion);
                    }
                  }>         
              <Text style={styles.textStyle}>Inducción del programa </Text>
          </TouchableOpacity>     
          <TouchableOpacity
                  style={[styles.btnStyle]}
                  onPress={() => {
                    Linking.openURL(doc);
                    }
                  }>         
              <Text style={styles.textStyle}>Inducción Oficial </Text>
          </TouchableOpacity>     
                      
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
