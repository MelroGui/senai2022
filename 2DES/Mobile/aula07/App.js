import {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, textInput, Image } from 'react-native';

export default function App() {
  const [imagen, setImagen] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => {return res.json()})
      .then(data => {
        setImagen(data);
      })
    });

    return (
      <View style={styles.container}> 
        {
          imagen.map((imgs, index) => {
            return(
              <View key={index}>
                <Image source={{uri:imgs.url}}  style={styles.imges}/>
              </View>
            )
          })
        }
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  imges: {
    width: '35%',
    height: '35%',
  }
});