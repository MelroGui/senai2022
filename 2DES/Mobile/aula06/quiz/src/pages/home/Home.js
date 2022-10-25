import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Home({navigation}) {

    return (
        <View>
            <Text style={style.titulo}>Tatu Quiz</Text>
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/bf/Mascote_Copa.png/250px-Mascote_Copa.png'}} style={style.fuleco} />
            <TouchableOpacity style={style.btnStart} onPress={() => { navigation.navigate('Q1') }}>
                <Text style={style.text}>Start</Text>
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
    }
  });