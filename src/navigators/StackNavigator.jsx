import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome/Welcome';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{cardStyle: {backgroundColor: '#FFF'}}}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Root" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
