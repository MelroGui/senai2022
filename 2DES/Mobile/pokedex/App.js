import {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, textInput, Image, _View } from 'react-native';

export default function App() {
  const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(res => {return res.json()})
      .then(data => {
        setPokemon(data);
      })
    });

    return (
      <View style={styles.container}> 
        {
          (pokemon !== undefined)
          ?
          <View>
            <Text>{pokemon.name}</Text> 
            <Image style={styles.img} source={{uri: pokemon.sprites.front_default}}/>
          </View>
          :
          <View>
            <Image style={styles.img} source={{uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fflutterawesome.com%2Fa-collection-of-high-fidelity-loading-animations-in-gif-format-with-flutter%2F&psig=AOvVaw3lpT8SJznuHO1gXsTU_2j1&ust=1669211134810000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCa7MX3wfsCFQAAAAAdAAAAABAP"}} />
          </View>
        }
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  img: {
    width: '100px',
    height: '100px',
  }
});
