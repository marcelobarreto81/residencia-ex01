import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TextInput, View} from 'react-native';
import Button from '../../components/Button/Button';
import styles from './styles';

const Home = ({navigation}) => {
  const [mensagem, setMensagem] = useState('');
  const [competidores, setCompetidores] = useState();
  const [competidor, setCompetidor] = useState('');

  const mensagens = [
    'mensagem 1',
    'mensagem 2',
    'mensagem 3',
    'mensagem 4',
    'mensagem 5',
  ];

  useEffect(() => {
    setCompetidores([
      {nome: 'Daniel', pizzas: 2},
      {nome: 'Diogo', pizzas: 1},
      {nome: 'João', pizzas: 0},
    ]);
  }, []);

  useEffect(() => {
    const numeroAleatorio = Math.floor(Math.random() * 5);
    const mensagemEscolhida = mensagens[numeroAleatorio];
    setMensagem(mensagemEscolhida);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoToWelcome = () => {
    navigation.navigate('Welcome');
  };

  const adicionarPizzas = (item) => {
    const newCompetidores = competidores.map((itemCompetidor) => {
      if (itemCompetidor.nome === item.nome) {
        itemCompetidor.pizzas = itemCompetidor.pizzas + 1;
      }
      return itemCompetidor;
    });
    setCompetidores(newCompetidores);
  };

  const adicionarCompetidor = () => {
    const competidorObj = {nome: competidor, pizzas: 0};
    setCompetidores([...competidores, competidorObj]);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://media-cdn.tripadvisor.com/media/photo-s/0d/99/1e/d3/pizza-marguerita.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.mensagemContainer}>
        <Button title="Navegar" onPress={handleGoToWelcome} />
        <Text style={styles.mensagemText}>{mensagem}</Text>
        {
          <FlatList
            data={competidores}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemNome}>{item.nome}</Text>
                <View style={styles.itemPizzas}>
                  <Text style={styles.itemPizzasText}>{item.pizzas}</Text>
                  <Button
                    buttonStyle={styles.itemBtnAdd}
                    title="+"
                    onPress={() => adicionarPizzas(item)}
                  />
                </View>
              </View>
            )}
            keyExtractor={(item) => item.nome}
          />
        }
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={setCompetidor}
            value={competidor}
          />
          <Button
            buttonStyle={styles.button}
            title="+"
            onPress={adicionarCompetidor}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
