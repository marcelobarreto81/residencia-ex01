import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Button from './Button';

const App = () => {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState('');

  const mensagens = [
    'mensagem 1',
    'mensagem 2',
    'mensagem 3',
    'mensagem 4',
    'mensagem 5',
  ];

  useEffect(() => {
    const numeroAleatorio = Math.floor(Math.random() * 5);
    const mensagemEscolhida = mensagens[numeroAleatorio];
    setMensagem(mensagemEscolhida);
  }, [mensagens]);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const diminuirContador = () => {
    if (contador === 0) {
      Alert.alert(
        'Erro',
        'Não é possível registrar números menores que 0 (zero)',
      );
      return;
    }
    setContador(contador - 1);
  };

  const zerarContador = () => {
    if (contador === 0) {
      Alert.alert('Erro', 'Seu contador já está zerado!');
    }
    setContador(0);
  };

  return (
    <>
      <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 18}}>
        {mensagem}
      </Text>
      <Text style={styles.display}>{contador}</Text>
      <View style={styles.buttonRowContainer}>
        <Button
          buttonStyle={{backgroundColor: '#269e3e'}}
          title="Aumentar"
          onPress={aumentarContador}
        />
        <Button
          buttonStyle={{backgroundColor: '#c20000'}}
          title="Diminuir"
          onPress={diminuirContador}
        />
      </View>
      <Button
        buttonStyle={{backgroundColor: '#dbbf1f'}}
        title="Zerar"
        onPress={zerarContador}
      />
    </>
  );
};

const styles = StyleSheet.create({
  display: {
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#424242',
  },
  buttonRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
