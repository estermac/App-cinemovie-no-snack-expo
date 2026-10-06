import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const cores = {
  fundo: '#0F1015',
  superficie: '#1B1E26',
  vermelho: '#E50914',
  amarelo: '#FFC107',
  textoPrincipal: '#F5F5F7',
  textoSecundario: '#9E9EA7',
};

export default function Artista(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Quais são os filmes do momento em cartaz? Venha conferir!</Text>

      <FlatList
        data={artistas}
        renderItem={({ item }) => 
          <View style={estilo.artista}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate(item.buttom)}}>
              <Text style={estilo.txtArtista}> {item.nome} </Text>
            </TouchableOpacity>
            <View style={estilo.rede}>
              <Text style={estilo.curtidas}>
                <MaterialCommunityIcons
                  name="thumb-up"
                  size={20}
                  color={cores.vermelho}
                />
                {' '}{item.like} Curtidas
              </Text>
              <Text style={estilo.visus}>
                <MaterialCommunityIcons
                  name="popcorn"
                  size={20}
                  color={cores.amarelo}
                />
                {' '}{item.visus} 
              </Text>
            </View>
          </View>
        }
      />
    </View>
  );
}

const artistas = [
  {
    uid: 1,
    nome: 'A Odisseia',
    like: 2000,
    visus: 10000,
    buttom: 'Aodisseia',
  },

  {
    uid: 2,
    nome: 'Sobrenatural: Agora Entre Nós',
    like: 4500,
    visus: 15000,
    buttom: 'Sobrenatural',
  },

  {
    uid: 3,
    nome: 'Homem aranha: Um novo dia',
    like: 850,
    visus: 4345,
    buttom: 'Homemaranha',
  },

  {
    uid: 4,
    nome: 'Resident Evil',
    like: 2500,
    visus: 3450,
    buttom: 'Residentevil',
  },
];

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },

  artista: {
    backgroundColor: cores.superficie,
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    minHeight: 100,
    borderRadius: 12,
  },

  titulo: {
    fontSize: 24,
    textAlign: 'center',
    color: cores.textoPrincipal,
    fontWeight: '700',
    marginTop: 60,
    marginBottom: 24,
    paddingHorizontal: 16,
  },

  rede: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  txtArtista: {
    fontSize: 20,
    fontWeight: '600',
    color: cores.textoPrincipal,
  },

  curtidas: {
    fontSize: 14,
    color: cores.textoSecundario,
  },

  visus: {
    fontSize: 14,
    color: cores.textoSecundario,
  },
});