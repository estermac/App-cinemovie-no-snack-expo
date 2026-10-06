import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Homemaranha() {
  return (
    <ScrollView style={estilo.container} contentContainerStyle={estilo.conteudo}>
      <Text style={estilo.titulo}> Homem aranha: um novo dia </Text>
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
              source={require('../../assets/capaaranha.jpg')}
            />
            <Text style={estilo.rotulo}> Capa </Text>
          </View>

          <View>
            <Image
              resizeMode={'cover'}
              style={estilo.img}
              source={require('../../assets/framearanha.png')}
            />
            <Text style={estilo.rotulo}> Frame filme</Text>
          </View>

          <View>
            <Image
              resizeMode={'cover'}
              style={estilo.img}
              source={require('../../assets/tomaranha.jpg')}
            />
            <Text style={estilo.rotulo}>Frame filme</Text>
          </View>
        </ScrollView>
      </View>
      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          Homem-Aranha: Um Novo Dia (Spider-Man: Brand New Day), arco marcante dos quadrinhos que redefiniu a vida do herói, acompanha Peter Parker tentando reconstruir sua rotina em Nova York após ter sua identidade secreta apagada da memória do mundo. De volta à estaca zero, dividindo apartamento e enfrentando problemas financeiros, ele precisa combater novas ameaças — como o misterioso Senhor Negativo — enquanto reaprende a equilibrar a vida de herói com as responsabilidades do dia a dia. O público é fascinado por essa fase devido ao retorno às origens clássicas do personagem, combinando ação dinâmica, o humor ágil do Amigão da Vizinhança e o eterno carisma de um jovem adulto imperfeito tentando fazer o certo.
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