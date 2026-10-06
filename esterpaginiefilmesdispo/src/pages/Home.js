import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

export default function Home() {
  const [fontesCarregadas] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontesCarregadas) {
    return null;
  }

  return (
    <View style={estilo.container}>
      <ImageBackground
        style={estilo.fundoimg}
        resizeMode="stretch"
        source={require('../../assets/cinema.jpg')}
      >
        <Text style={estilo.titulo}>
          Cinemovie
        </Text>
      </ImageBackground>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: 
  {
    flex: 1,
  },

  fundoimg: {
    flex: 1,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 40,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'BebasNeue_400Regular',
    letterSpacing: 2,
  },
});