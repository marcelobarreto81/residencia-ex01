import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Welcome = ({navigation}) => {
  const goToPizzaScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Root'}],
    });
  };

  const goToTemakiScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Root'}],
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontSize: 20, textAlign: 'center', marginTop: 50}}>
        Seja muito bem vindo. Escolha o tipo de rodízio:
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          marginTop: 100,
        }}>
        <TouchableOpacity
          onPress={goToPizzaScreen}
          style={{
            marginHorizontal: 20,
            borderWidth: 1,
            height: 150,
            borderRadius: 5,
            padding: 5,
          }}>
          <Image
            source={require('../../assets/images/pizza_icon.png')}
            style={{flex: 1, resizeMode: 'contain', width: 150}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToTemakiScreen}
          style={{
            marginHorizontal: 20,
            height: 150,
            borderWidth: 1,
            borderRadius: 5,
          }}>
          <Image
            source={require('../../assets/images/temaki_icon.jpg')}
            style={{flex: 1, resizeMode: 'contain', width: 150}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
