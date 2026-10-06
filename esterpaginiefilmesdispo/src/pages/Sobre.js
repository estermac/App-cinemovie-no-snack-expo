import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

export default function Sobre() {
  const [fontesCarregadas] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontesCarregadas) {
    return null;
  }

  return (
    <View style={estilo.container}>
      <ScrollView contentContainerStyle={estilo.conteudo}>

        <Text style={estilo.titulo}>
          Sobre o Cinemovie
        </Text>

        <View style={estilo.card}>
          <Text style={estilo.subtitulo}>
            O que é o Cinemovie?
          </Text>

          <Text style={estilo.texto}>
            O Cinemovie é um aplicativo desenvolvido para os amantes de
            cinema. Aqui você pode conhecer filmes, conferir informações
            sobre eles e acessar uma seleção de filmes favoritos da galera.
          </Text>
        </View>

        <View style={estilo.card}>
          <Text style={estilo.subtitulo}>
            Sobre o projeto
          </Text>

          <Text style={estilo.texto}>
            Este aplicativo foi desenvolvido como um projeto acadêmico,
            utilizando React Native e Expo, com o objetivo de colocar em
            prática conceitos de desenvolvimento de aplicações mobile,
            navegação entre telas, componentes e estilização.
          </Text>
        </View>

        <View style={estilo.card}>
          <Text style={estilo.subtitulo}>
            Desenvolvedores
          </Text>

          <Text style={estilo.texto}>
            Projeto desenvolvido por:
          </Text>

          <Text style={estilo.nome}>
            Rafael Oliveira
          </Text>

          <Text style={estilo.nome}>
            Ester Fidelis
          </Text>
        </View>

        <Text style={estilo.versao}>
          Cinemovie • Versão 1.0
        </Text>

        <View style={estilo.rodape}>
          <Text style={estilo.rodapeTexto}>
            Desenvolvido por
          </Text>

          <Text style={estilo.rodapeNomes}>
            Rafael Oliveira • Ester Fidelis
          </Text>

          <Text style={estilo.rodapeCopyright}>
            © 2026 Cinemovie
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1015',
  },

  conteudo: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },

  titulo: {
    fontSize: 40,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'BebasNeue_400Regular',
    letterSpacing: 2,
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#1B1E26',
    borderRadius: 12,
    padding: 20,
    marginBottom: 18,
  },

  subtitulo: {
    fontSize: 25,
    color: '#E50914',
    fontFamily: 'BebasNeue_400Regular',
    letterSpacing: 1,
    marginBottom: 12,
  },

  texto: {
    fontSize: 16,
    lineHeight: 25,
    color: '#F5F5F7',
    textAlign: 'justify',
    marginBottom: 10,
  },

  nome: {
    fontSize: 18,
    color: '#F5F5F7',
    fontWeight: '600',
    marginTop: 5,
  },

  versao: {
    textAlign: 'center',
    color: '#9E9EA7',
    fontSize: 14,
    marginTop: 5,
  },

  rodape: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#2C2F38',
    alignItems: 'center',
  },

  rodapeTexto: {
    color: '#9E9EA7',
    fontSize: 13,
    marginBottom: 5,
  },

  rodapeNomes: {
    color: '#F5F5F7',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },

  rodapeCopyright: {
    color: '#6F7078',
    fontSize: 12,
  },
});