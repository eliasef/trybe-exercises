import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [curso, setCurso] = useState(null);

  const Armazenar = (chave, valor) => {
    AsyncStorage.setItem(chave, valor)
  };

  const Buscar = async (chave) => {
    const valor = await AsyncStorage.getItem(chave)
    setCurso(valor);
    return valor
  };

  Armazenar('01', 'React Native');
  Armazenar('02', 'Javascript');
  Armazenar('03', 'C++');
  Armazenar('04', 'HTML + CSS');

  // AsyncStorage.clear()

  Buscar('04')

  return (
    <View style={styles.container}>
      <Text>Armazenamento local / Async-Storage</Text>
      <Text>Curso de {curso}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
