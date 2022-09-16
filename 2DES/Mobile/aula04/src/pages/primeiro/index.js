import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function Primeira({route}) {
  // var matricula = route.params.matricula;
  // var nomefunc = route.params.nome;

  var {nomerestalrante, nota } = route.params;

  const [nome, setRestalrante] = useState("");
  const [nota, setNota] = useState("");
  const [lista, setLista] = useState([
    {
      "nomerestalrante":"Lanchonete do Gordão",
      "nota":"100"
    },
    {
      "nomerestalrante":"Bar do Biel",
      "nota":"0"
    }
  ]);

  const cadastrar = () => {
    let nFunc = {
      "nomerestalrante":nome,
      "nota":nota
    }

    setLista([...lista, nFunc]);
  }

  return (
    <View style={styles.container}>
      <Text>{matricula}</Text>
      <Text>{nomefunc}</Text>
      <TextInput placeholder="Nome do Restalrante" onChangeText={(val) => { setRestalrante(val) }} />
      <TextInput placeholder="Nota do Restalrante" onChangeText={(val) => { setNota(val) }}/>
      <Button title="Cadastrar Restalrante" onPress={() => { cadastrar() }}/>
      <ScrollView>
        {
          lista.map((restalrante, indice) => {
            return(
              <View key={indice}>
                <Text>{restalrante.nome}</Text>
                <Text>{restalrante.nota}</Text>
              </View>
            )
          })
        }
      </ScrollView>
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
});
