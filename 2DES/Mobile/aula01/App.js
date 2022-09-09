import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {

  const usuarios = [{
    "img": 'https://s2.glbimg.com/A8lV-Jq1DzG6D68oZEYnheR5KjQ=/e.glbimg.com/og/ed/f/original/2014/12/04/stephen-hawking.jpg',
    "nome": 'stefen hawking',
    "cargo": 'Inteligente'
  },
  {
    "img": 'https://upload.wikimedia.org/wikipedia/commons/5/54/Stevie_Wonder_1973.JPG',
    "nome": 'Steve wonder',
    "cargo": 'Dono da Maçã'
  },
  {
    "img": 'https://onlyone.ind.br/wp-content/uploads/2019/04/produto-portao.jpg',
    "nome": 'Portões do Bill',
    "cargo": 'Dono da Micro Sistemas'
  }
  ];

  <View>
    <View style={style.container}>
      {
        usuarios.map(usuario => {
          return (
            <View>
              <Image style={style.imgPerfis} source={{ uri: usuarios.img }} />,
              <Text>{`${usuario.nome}` - `${usuario.cargo}`}</Text>
            </View>
          )
        })
      }
    </View>
  </View>

  //   return (
  //     <View style={style.container}>
  //       <View style={style.primeira}>
  //         <Text>Hello, World!!!</Text>
  //         <TextInput style={style.input} placeholder="Email"></TextInput>
  //         <Button title="Cadastrar" />
  //         <TouchableOpacity style={style.btExclui}>
  //           <Image source={trashIcon} style={{ width: '32', height: '32px' }} />
  //           <Text>Apagar Registro</Text>
  //         </TouchableOpacity>
  //         {
  //           usuarios.map(usuario => {
  //             return (
  //               <Text>{`${usuario.matricula}` - `${usuario.nome}`}</Text>
  //             )
  //           })
  //         }
  //       </View>
  //       <View style={style.segunda}>
  //         <Text>Segunda View</Text>
  //         <Image source={imgGatin} style={style.imgGatin} />
  //         <Image style={style.imgdrome} source={{uri:'https://i.ytimg.com/vi/9OtuRcD_dBk/maxresdefault.jpg' }} />
  //       </View>
  //     </View>
  //   );
  // }

  const style = StyleSheet.create({
    container: {
      flex: 4,
      backgroundColor: 'black'
    },
    // primeira: {
    //   flex: 1,
    //   backgroundColor: '#F1D2E7'
    // },
    // segunda: {
    //   flex: 4,
    //   backgroundColor: '#E2F5E8'
    // },
    imgPerfis: {
      width: '350px',
      height: '200px',
    }
    // imgdrome: {
    //   width: '350px',
    //   height: '200px',
    // },
    // input: {
    //   borderBottomColor: 'gray',
    //   borderBottomWidth: '1px',
    //   padding: '10px'
    // },
    // btExclui: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   backgroundColor: '#FCFFA6',
    //   border: '2px solid #adffa6',
    //   borderRadius: '10px'
    // }
  });
}