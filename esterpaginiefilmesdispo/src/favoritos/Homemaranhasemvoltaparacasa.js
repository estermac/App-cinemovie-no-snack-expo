import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Homemaranhasemvoltaparacasa() {
  return (
    <ScrollView style={estilo.container} contentContainerStyle={estilo.conteudo}>
      <Text style={estilo.titulo}> Homem Aranha: Sem Volta para Casa </Text>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={224}
          snapToAlignment="start"
          decelerationRate="fast"
        >
          <View>
            <Image
              resizeMode={'cover'}
              style={estilo.img}
              source={require('../../assets/capahac.jpg')}
            />
            <Text style={estilo.rotulo}> Capa </Text>
          </View>

          <View>
            <Image
              resizeMode={'cover'}
              style={estilo.img}
              source={require('../../assets/hacfoto.jpg')}
            />
            <Text style={estilo.rotulo}>Frames do filme</Text>
          </View>

          <View>
            <Image
              resizeMode={'cover'}
              style={estilo.img}
              source={require('../../assets/fotohac.jpg')}
            />
            <Text style={estilo.rotulo}>Frames do filme</Text>
          </View>
        </ScrollView>
      </View>
      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando o feitiço para reverter o evento não sai como esperado, o Homem-Aranha e o seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.
        </Text>
      </View>
    </ScrollView>
  );
}

const cores = {
  fundo: '#0F1015',
  superficie: '#1B1E26',
  vermelho: '#E50914',
  amarelo: '#FFC107',
  textoPrincipal: '#F5F5F7',
  textoSecundario: '#9E9EA7',
};

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 28,
    textAlign: 'center',
    color: cores.textoPrincipal,
    fontWeight: '700',
    marginTop: 60,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  img: {
    width: 200,
    height: 300,
    marginHorizontal: 12,
    borderRadius: 12,
  },
  rotulo: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
    color: cores.textoSecundario,
  },
  resumo: {
    marginTop: 24,
    marginHorizontal: 16,
    backgroundColor: cores.superficie,
    borderRadius: 12,
    padding: 16,
  },
  textoResumo: {
    fontSize: 16,
    lineHeight: 24,
    color: cores.textoSecundario,
  },
});