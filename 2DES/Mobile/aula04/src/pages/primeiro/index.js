import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';

const image = { uri: "https://www.coisasdeboteco.com.br/blog/imagensBlog/pubingles3.jpeg" };

export default function Primeiro({navigation}) {
const restaura = [
    {
      "nome":"Lanchonete do Gordão",
      "nota":"Nota: 100",
      "descricao":{
          "imagem":"https://media-cdn.tripadvisor.com/media/photo-s/0d/72/0a/77/cantinho-do-gordo.jpg",
          "endereco":"Rua Angelo Costa Lima",
          "telefone":"(19)971091267"
      }
    },
    {
      "nome":"Bar do Biel",
      "nota":"Nota: 0",
      "descricao":{
          "imagem":"https://img.restaurantguru.com/r994-Bar-do-Gabriel-design-2021-09-3.jpg",
          "endereco":"Rua Antonio fant",
          "telefone":"(19)99849-8662"
    }
    },
    {
      "nome":"Senai's",
      "nota":"Nota: 35",
      "descricao":{
          "imagem":"http://mundodecursos.com.br/wp-content/uploads/2022/02/curso-atendente-lanchonete-gratuito-online-1.jpg",
          "endereco":"Rua ",
          "telefone":"(19)3837-6300"
    }
    }
  ];

  return(
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
        {
            restaura.map((restaurante, indice) => {
                return(
                  
                    <TouchableOpacity onPress={() => {navigation.navigate("Segundo", { "descricao":restaurante.descricao} )}} style={styles.content}>
                        <Text style={styles.title}>{restaurante.nome}</Text>
                        <Text style={styles.title}>{restaurante.nota}</Text>
                    </TouchableOpacity>
                )
            })
        }
  </View>
  </ImageBackground>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: "none"
  },
  content: {
    backgroundColor: '#f2e7c4',
    border: '1px solid black',
    borderRadius: '5px',
    marginTop: '50px',
    height: '10%',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: '20px',
  },  
  image: {
    width: '100%',
    height: '100%',
  }
});