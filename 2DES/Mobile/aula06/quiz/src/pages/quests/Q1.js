import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
const img1 = require('../../../assets/tatu1.jpg');

export default function Q1({ navigation}) {
        const [checked, setChecked] = React.useState('first');
      
        return (
          <View>
            <Text style={style.titulo}>Quantos anos vive um Tatu?</Text>
            <Image source={{uri: img1}} style={style.fuleco} />
            <RadioButton style={style.caixachecada}
              value="first"
              status={ checked === 'first' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('first')}
            />
            <Text>10 Anos</Text>
            <RadioButton style={style.caixachecada}
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')}
            />
            <Text>50 Anos</Text>
            <RadioButton style={style.caixachecada}
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')}
            />
            <Text>500 Anos</Text>
            <RadioButton style={style.caixachecada}
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')}
            />
            <Text>2 meses</Text>
            <RadioButton style={style.caixachecada}
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')}
            />
            <Text>Pra Sempre</Text>
            <TouchableOpacity style={style.btnStart} onPress={() => { navigation.navigate('Q2') }}>
                <Text style={style.text}>Proxima Quest</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
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
    caixachecada: {
       
    }
  });