import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Sobre from './pages/Sobre';

const Stack = createStackNavigator();

export default function RotasButtomSobre() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sobre"
        component={Sobre}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}