import { View, Text, Image, StyleSheet} from 'react-native';

export default function segundo({ route }) {
    var {descricao} = route.params;

    return(
        <View style={styles.container}>
            <Image source={{uri:descricao.imagem}} style={styles.image} />
            <Text style={styles.desc}>Endereco : {descricao.endereco}</Text>
            <Text style={styles.desc}>Telefone : {descricao.telefone}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: '10%',
        marginLeft: '9%',
        height: '30vh',
        width: '40vh',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        fontSize: '1.2em',
        marginTop: '3%',
        marginLeft: '9%',
        height: '4vh',
        width: '40vh',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: '#f2e7c4'
    }
});