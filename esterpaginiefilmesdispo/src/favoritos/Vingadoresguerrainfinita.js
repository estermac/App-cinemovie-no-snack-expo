import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Vingadoresguerrainfinita() {
  return (
    <ScrollView style={estilo.container} contentContainerStyle={estilo.conteudo}>
      <Text style={estilo.titulo}> Vingadores Guerra Infinita </Text>
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
              source={require('../../assets/capavgi.jpg')}
            />
            <Text style={estilo.rotulo}> Capa </Text>
          </View>

          <View>
            <Image
              resizeMode={'cover'}
              style={estilo.img}
              source={require('../../assets/vgifoto.jpg')}
            />
            <Text style={estilo.rotulo}>Frames do filme</Text>
          </View>

          <View>
            <Image
              resizeMode={'cover'}
              style={estilo.img}
              source={require('../../assets/fotovgi.jpg')}
            />
            <Text style={estilo.rotulo}>Frames do filme</Text>
          </View>
        </ScrollView>
      </View>
      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          Homem de Ferro, Capitão América, Thor, Hulk e os Vingadores se unem para combater o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a humanidade.
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