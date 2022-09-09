import { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, CheckBox, } from 'react-native';

export default function App() {
  const [v1, setValue1] = useState("");
  const [v2, setValue2] = useState("");
  const [soma, setSoma] = useState("");
  const [sub, setSub] = useState("");
  const [mult, setMult] = useState("");
  const [div, setDiv] = useState("");
  const [result, setConta] = useState("");

  return (
    <View style={style.container}>
      <TextInput style={style.input} value={v1} onChangeText={(val1) => { setValue1(val1); }} />
      <TextInput style={style.input} value={v2} onChangeText={(val2) => { setValue2(val2); }} />
      <View style={style.contas}>
        <CheckBox style={style.soma}
          value={soma}
          onValueChange={setSoma}
        />
        <CheckBox style={style.sub}
          value={sub}
          onValueChange={setSub}
        />
        <CheckBox style={style.mult}
          value={mult}
          onValueChange={setMult}
        />
        <CheckBox style={style.div}
          value={div}
          onValueChange={setDiv}
        />
      </View>
      <TouchableOpacity style={style.btConta} onPress={() => {
        if (soma == true) {
          setConta(parseInt(v1) + parseInt(v2));
        } else if (sub == true) {
          setConta(parseInt(v1) - parseInt(v2));
        } else if (mult == true) {
          setConta(parseInt(v1) * parseInt(v2));
        } else if (div == true) {
          setConta(parseInt(v1) / parseInt(v2));
        }
      }}>
        <Text>Calcular</Text>
      </TouchableOpacity>
      <Text>{result}</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 4
  },
  soma: {
    backgroundColor: '#F1D2E7'
  },
  sub: {
    backgroundColor: '#E2F5E8'
  },
  mult: {
    backgroundColor: '#E2F5E8'
  },
  div: {
    backgroundColor: '#E2F5E8'
  },
  input: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: '1px',
    padding: '5px'
  },
  btConta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(150, 150, 150)',
    border: '2px solid black',
    borderRadius: '5px',
  },
    contas: {
      
  }
});