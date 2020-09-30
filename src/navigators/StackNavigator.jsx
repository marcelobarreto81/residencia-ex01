import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PizzaScreen from '../screens/PizzaScreen/PizzaScreen';
import Welcome from '../screens/Welcome/Welcome';
import TemakiScreen from '../screens/TemakiScreen/TemakiScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{cardStyle: {backgroundColor: '#FFF'}}}>
      <Stack.Screen
        name="PizzaScreen"
        component={PizzaScreen}
        options={{headerTitle: 'Menu'}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen name="TemakiScreen" component={TemakiScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
