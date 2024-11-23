import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import ListItem from '../components/ListItem'; // Importa el nuevo componente de lista
//import { getAllLinks } from '../api/weblinks';
import { LogBox } from 'react-native';
import { size } from 'lodash';

LogBox.ignoreAllLogs();
import { getAllSuperenceTypes } from '../api/sugerences';

/**
 * Pantalla que muestra el formulario de sugerencias, para poder enviar un mensaje a la entidad.
 * @param {prop} navigation - Contiene información básica de navegación
 * @property {Array<Object>} sugerenceTypes - Lista que contiene Objetos con estructura de un Tipo de Sugerencia.
 * @property {function} setSugerenceTypes - Método de acceso indirecto para modificar la propieadad sugerenceTypes.
 * @property {string} sugerenceType - Variable que guarda el tipo de sugerencia que seleccione un Usuario.
 * @property {function} setSugerenceType - Método de acceso indirecto para modificar la propieadad sugerenceType.
 * @property {string} comment - Variable que guarda el comentario que desea realizar un Usuario.
 * @property {function} setComment - Método de acceso indirecto para modificar la propieadad comment.
 * @property {string} error - Variable que contiene información de Errores cometidos por el Usuario.
 * @property {function} setError - Método de acceso indirecto para modificar la propieadad error.
 * @property {function} useEffect - Hook de React que permite realizar tareas asíncronas a la vista.
 * @property {function} useState - Hook de React que permite crear una variable de estado con su método accesor.
 * @property {Promise} getAllSuperenceTypes - {@link getAllSuperenceTypes} | Promesa que devuelve los tipos de sugerencia dependiendo la respuesta del servidor.
 * @property {Promise} storeSugerence - {@link storeSugerence} | Promesa que crea un nuevo comentario en el servidor y regresa un estatus de 201.
 * @property {function} handleComment - Método que guarda un comentario de tipo string cada vez que se presiona una tecla en la caja de comentario.
 * @property {function} handleSend - Método que valida la información del formulario y envía la información al servidor usando la promesa {@link storeSugerence} o guarda errores de validación.
 * @listens {onChangeText} | El método handleComment se dispara cuando ocurre este evento en un componente <TextInput> que almacena un comentario.
 * @listens {onPress} | El método handleSend se dispara cuando ocurre este evento en un componente <TouchableOpacity> que representa el botón Enviar.
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @see https://reactjs.org/docs/hooks-effect.html
 * @see https://reactjs.org/docs/hooks-state.html
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
 * @see https://reactnative.dev/docs/textinput#onchangetext
 * @see https://reactnative.dev/docs/touchableopacity
 * @see https://github.com/react-native-picker/picker/issues/209
 * @todo Validar la longitud el comentario.
 * @todo Mostrar el texto de error.
 * @todo validar promesas cuando no hay internet.
 * @experimental El componente Picker tiene limitaciones si se desea agregar estilos a Picker.Item.
 * @return {ScrollView} Regresa una layout con scroll vertical, y muestra la maquetación de la pantalla.
 */
const SugerenceScreen = ({ navigation }) => {
 const [links, setlinks] = useState([]);
   const [loading, setLoading] = useState(true);
   const [fetched, setFetched] = useState(false);

   useEffect(() => {
     const abortController = new AbortController();
     const signal = abortController.signal;
     getAllSuperenceTypes(signal).then((response) => {
       setlinks(response);
       setLoading(false);
       setFetched(true);
     });

     if (fetched) abortController.abort();
   }, []);

   return (
     <ScrollView showsVerticalScrollIndicator={true}>
       {loading ? (
         <ActivityIndicator
           style={{
             marginTop: 200,
           }}
           size="large"
           color="#0000ff"
         />
       ) : size(links) === 0 ? (
         <Text style={styles.text}>No se encontraron Expresiones</Text>
       ) : (
         <View style={styles.view}>
         <Text style={styles.title}>Expresiones
         </Text>
           {links.map((link, key) => (
             <ListItem
               key={key}
               title={link.title}
               icon="https://img.icons8.com/?size=100&id=3vUMRam79GLa&format=png&color=000000" // Usa una URL de ícono
               //https://img.icons8.com/color/48/000000/bookmark.png
               url={link.url}

             />
           ))}
         </View>
       )}
     </ScrollView>
   );
 };

 const styles = StyleSheet.create({
   view: {
     flex: 1, // Permite que el View ocupe todo el espacio disponible
     paddingBottom: 30,
   },
   title: {
       fontFamily: 'NunitoSans-Bold',
       marginTop: 20,
       marginBottom: 20,
       fontSize: 30,
       color: '#566573',
       textAlign: 'center',
   },
   text: {
     fontFamily: 'NunitoSans-Bold',
     textAlign: 'center',
     fontSize: 20,
     color: 'gray',
   },
 });

export default SugerenceScreen;
