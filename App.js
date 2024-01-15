import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ImageBackground }from 'react-native';

export default function App() {
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
        <Text style={styles.Texto}>****  ****  ****  2018</Text>
      </View>
      <View style={styles.Container_Nombre}>
        <Text style={styles.Texto_Nombre}>Michael Alexander Sevilla Martinez</Text>
        <Text style={styles.Texto_Fecha}>05/08</Text>
      </View>
      </ImageBackground>
      </View>
      </View>
    


      
     
      
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
    height: 500,
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
});
