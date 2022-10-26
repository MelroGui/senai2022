import { useState } from 'react';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const img5 = require('../../../assets/tatu5.jpg');

export default function Q5
({ navigation}) {
        const [certo, setCerto] = useState("");

        const salvar = async () => {
          try {
            await AsyncStorage.setItem("data", certo);
            setCerto("");
            console.log("sarvo")
          }catch(err) {
            console.log(err);
          }
        }

        return (
          <View>
             <View>
                <Text style={style.titulo}>Qual a principal diferença de um Tatu pra uma Capivara?</Text>
                <Image source={{uri: img5}} style={style.fuleco} />
              </View>
          
              <View style={style.checo}>
                  <RadioButton 
                    value="certo"
                    status={ certo === 'certo' ? 'checked' : 'unchecked' }
                    onPress={() => setCerto('certo')}
                  />
                  <Text>Capivara é um roedor Tatu é um Tatu</Text>
                  </View>
                  <View style={style.checo}>
                  <RadioButton 
                    value="second"
                    status={ certo === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setCerto('second')}
                  />
                  <Text>Tem diferença</Text>
                  </View>
                  <View style={style.checo}>
                  <RadioButton 
                    value="tird"
                    status={ certo === 'tird' ? 'checked' : 'unchecked' }
                    onPress={() => setCerto('tird')}
                  />
                  <Text>Tatu é foda Capivara nem tanto</Text>
                  </View>
                  <View style={style.checo}>
                  <RadioButton 
                    value="quatro"
                    status={ certo === 'quatro' ? 'checked' : 'unchecked' }
                    onPress={() => setCerto('quatro')}
                  />
                  <Text>Ok I Pull Up</Text>
                  </View>     
              <View>
                  <TouchableOpacity style={style.btnStart} onPress={() => { navigation.navigate('result'), salvar() }}>
                    <Text style={style.text}>Proxima Quest</Text>
                  </TouchableOpacity>
              </View>
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
    },
    Video: {
      width: '100%',
      height: '30vh'
    }
  });