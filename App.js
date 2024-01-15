import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Image, ImageBackground , TextInput }from 'react-native';



export default function App() {
  const [texto,setTexto] = useState('');

  function optenerTexto (obtener_info) {
   setTexto(obtener_info); 
   console.log(texto);
  }

  const [Num,setNum] = useState('');

  function optenerNum (obtener_Num) {
   setNum(obtener_Num); 
   console.log(Num);

     // Elimina los espacios existentes antes de formatear
  const numeroSinEspacios = obtener_Num.replace(/\s/g, '');
  // Agrega un espacio cada cuatro dígitos
  const numeroFormateado = numeroSinEspacios.replace(/(\d{4})/g, '$1 ');
  setNum(numeroFormateado.trim()); // trim para eliminar posibles espacios al final
  console.log(Num);
  }


  const [fecha,setFecha] = useState('');

  function optenerFecha (obtener_Fecha) {
   setFecha(obtener_Fecha); 
   const numeroSinEspacios = obtener_Fecha.replace(/\s/g, '');
   const numeroFormateado = numeroSinEspacios.replace(/(\d{2})(?=\d{2,}$)/g, '$1/');
   setFecha(numeroFormateado.trim()); // trim para eliminar posibles espacios al final

  console.log(fecha);
  }

  return (
    <View style={styles.container}>
      <View style={styles.Container_card}>
  

      <View style={styles.card}> 
      <View style={{borderRadius : 9, flex : 1}}>
      <ImageBackground resizeMode='cover' style={{flex : 1, borderRadius : 20}}
      imageStyle = {{borderRadius : 9, opacity: 0.6}} source={require('./assets/img/texture.jpg')}>
      <View style={styles.Container_image_card}>
      <Image  style={styles.chip} source={require('./assets/img/chip.png')}></Image>
      <Image style={styles.logo} source={require('./assets/img/logo_card.png')}></Image>
      </View>
      <View style={styles.Container_Numeros}>
        <Text style={styles.Texto}>{Num}</Text>
      </View>
      <View style={styles.Container_Nombre}>
        <Text style={styles.Texto_Nombre}>{texto.toUpperCase()}</Text>
        <Text style={styles.Texto_Fecha}>{fecha}</Text>
      </View>
      </ImageBackground>
      </View>
      </View>
  
      </View>

      <View style={styles.Contenedor_input}>
      <TextInput style={styles.Input} maxLength={19} onChangeText={optenerNum} placeholder='Numero de tarjeta' value={Num}></TextInput>
        <TextInput style={styles.Input} maxLength={26} onChangeText={optenerTexto} placeholder='Nombre Completo' value={texto}></TextInput>
        <TextInput style={styles.Input} maxLength={4} onChangeText={optenerFecha} placeholder='Fecha de vencimiento' ></TextInput>
      </View>

      </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Container_card:{
    width : '100%',
    height: 300,
   // backgroundColor: 'red', 
    justifyContent: 'center', alignItems : 'center'
  },
  card:{
    width : '95%',
    height: 240,
    backgroundColor: '#009ddd' ,
     borderRadius : 8
     },
     Container_image_card:{
      width: '100%',
      height: 50 ,
      // backgroundColor : 'white', 
       flexDirection:'row' , justifyContent: 'center' , alignItems : 'center', marginTop : 20
     },
     chip:{
      height : 40 , width : 60 , borderRadius : 7
     },
     logo:{
      height : 40 , width : 100 , marginLeft : 150
     },
     Container_Numeros:{
      height: 80 , width : '100%', 
      //backgroundColor: 'yellow',
       justifyContent : 'center' , alignItems : 'center'
     },
     Texto:{
      fontSize : 28 , fontWeight : 'bold'
     },
     Container_Nombre:{
      height: 80 , width : '100%',
       //backgroundColor: 'green',
        justifyContent : 'center' , alignItems : 'center',
      flexDirection : 'row'
     },
     Texto_Nombre:{
      fontSize : 15 , fontWeight : 'bold' 
     },
     Texto_Fecha:{
      fontSize : 15 , fontWeight : 'bold' , marginLeft : 15
     },
     Contenedor_input:{
      height: 200 , width : '100%', alignItems : 'center'
     },Input:{
      width: '95%', height : 60 , borderBottomWidth: 1
     }
});
