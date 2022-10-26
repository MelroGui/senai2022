import { useState } from 'react';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function result({ }) {

  return (
    <View>
      <View>
        <Text style={style.titulo}>Tatu KKKKKKKKKKKKKKKKKKKK</Text>
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