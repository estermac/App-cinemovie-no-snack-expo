import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Sobrenatural() {
  return (
    <ScrollView style={estilo.container} contentContainerStyle={estilo.conteudo}>
      <Text style={estilo.titulo}> Sobrenatural: Agora entre nós</Text>
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
              source={require('../../assets/capasobrenat.jpg')}
            />
            <Text style={estilo.rotulo}> Capa</Text>
          </View>

          <View>
            <Image
              resizeMode={'cover'}
              style={estilo.img}
              source={require('../../assets/bichofoto.jpg')}
            />
            <Text style={estilo.rotulo}> Frame filme </Text>
          </View>

          <View>
            <Image
              resizeMode={'cover'}
              style={estilo.img}
              source={require('../../assets/framesobna.jpg')}
            />
            <Text style={estilo.rotulo}>Frame filme</Text>
          </View>
        </ScrollView>
      </View>
      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          Agora Entre Nós (originalmente The In Between), série dos mesmos criadores de Vampire Diaries, acompanha a jornada do jovem paranormal Marcus enquanto ele tenta decifrar aparições perturbadoras e segredos sombrios em uma cidadezinha marcada por tragédias do passado. Ao lado de sua destemida amiga de infância, ele usa sua sensibilidade espiritual para investigar acontecimentos inexplicáveis que ameaçam a segurança da comunidade. O público atual tem se apaixonado pela produção graças ao seu ritmo envolvente, ao elenco carismático e à mistura certeira de suspense psicológico com dramas adolescentes sinceros, resgatando a nostalgia dos grandes clássicos do gênero sobrenatural.
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