import { useState } from 'react';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function result({ route}) {

  const [resp, setResp] = useState([]);

    const gabarito = ["second", "fourth", "second", "third", "first"];

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('resp');
            console.log(value)
            setResp(value.split(";"));
        } catch(e) {
            console.log(e);
            //error reading value
        }
    }

    if(resp.length === 0) getData();

    return(
        <View>
            <Text>Sua pontucao e : {route.params.score}</Text>
            {
                resp.map((item, index) => {
                    return(
                        <Text key={index}>Questao {index + 1} : {(item === gabarito[index]) ? "Acertou" : "Errou"}</Text>
                    )
                })
            }
        </View>
    )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    marginTop: '10%',
    fontSize: '40px',
    textAlign: 'center'
  },
  fuleco: {
    marginTop: '25%',
    width: '100%',
    height: '30vh'
  },
  text: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: 'white'
  },
  btnStart: {
    marginLeft: '13%',
    marginTop: '50px',
    height: '50px',
    width: '75%',
    backgroundColor: 'rgb(103, 80, 164)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px'
  },
  checo: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center'
  }
});