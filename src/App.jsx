import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator';
import DrawerNavigator from './navigators/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator>
        <DrawerNavigator />
      </StackNavigator>
    </NavigationContainer>
  );
};

export default App;
