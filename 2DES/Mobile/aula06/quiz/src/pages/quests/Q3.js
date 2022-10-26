import { useState } from 'react';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const img3 = require('../../../assets/tatu3.jpg');

export default function Q3
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
                <Text style={style.titulo}>Tatu é um mamifero?</Text>
                <Image source={{uri: img3}} style={style.fuleco} />
              </View>
          
              <View style={style.checo}>
                  <RadioButton 
                    value="certo"
                    status={ certo === 'certo' ? 'checked' : 'unchecked' }
                    onPress={() => setCerto('certo')}
                  />
                  <Text>Sim</Text>
                  </View>
                  <View style={style.checo}>
                  <RadioButton 
                    value="second"
                    status={ certo === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setCerto('second')}
                  />
                  <Text>Não</Text>
                  </View>
                  <View style={style.checo}>
                  <RadioButton 
                    value="tird"
                    status={ certo === 'tird' ? 'checked' : 'unchecked' }
                    onPress={() => setCerto('tird')}
                  />
                  <Text>Talvez</Text>
                  </View>
                  <View style={style.checo}>
                  <RadioButton 
                    value="quatro"
                    status={ certo === 'quatro' ? 'checked' : 'unchecked' }
                    onPress={() => setCerto('quatro')}
                  />
                  <Text>Mamifero?</Text>
                  </View>     
              <View>
                  <TouchableOpacity style={style.btnStart} onPress={() => { navigation.navigate('Q4'), salvar() }}>
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
    }
  });