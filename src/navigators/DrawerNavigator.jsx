import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PizzaScreen from '../screens/PizzaScreen/PizzaScreen';
import TemakiScreen from '../screens/TemakiScreen/TemakiScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="PizzaScreen"
        component={PizzaScreen}
        options={{headerTitle: 'Menu'}}
      />
      <Drawer.Screen name="TemakiScreen" component={TemakiScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
