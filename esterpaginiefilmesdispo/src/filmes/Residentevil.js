import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Residentevil() {
  return (
    <ScrollView style={estilo.container} contentContainerStyle={estilo.conteudo}>
      <Text style={estilo.titulo}> Resident Evil</Text>
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
              source={require('../../assets/residentcapa.jpg')}
            />
            <Text style={estilo.rotulo}> Capa</Text>
          </View>

          <View>
            <Image
              resizeMode={'cover'}
              style={estilo.img}
              source={require('../../assets/frameevil.jpeg')}
            />
            <Text style={estilo.rotulo}> Frame filme </Text>
          </View>

          <View>
            <Image
              resizeMode={'cover'}
              style={estilo.img}
              source={require('../../assets/bombaevil.jpeg')}
            />
            <Text style={estilo.rotulo}>Frame filme</Text>
          </View>
        </ScrollView>
      </View>
      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          Resident Evil, clássica franquia de survival horror que revolucionou os videogames, acompanha a constante luta de agentes e sobreviventes — como Leon Kennedy, Chris Redfield e Jill Valentine — para conter surtos de armas biológicas e vírus mortais criados pela gananciosa corporação Umbrella. Enfrentando zumbis, aberrações genéticas e conspiradores mundiais, os heróis precisam racionar recursos e resolver enigmas para sobreviver ao caos. O público é apaixonado pela saga por seu equilíbrio perfeito entre suspense de roer as unhas, ação eletrizante e personagens icônicos, mantendo-se sempre relevante no pop através de jogos aclamados, remakes impecáveis e adaptações para o cinema e TV.
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