import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Aodisseia from './filmes/Aodisseia';
import Sobrenatural from './filmes/Sobrenatural';
import Homemaranha from './filmes/Homemaranha';
import Residentevil from './filmes/Residentevil';
import Filmes from './pages/Filmes';

const Stack= createStackNavigator();

export default function RotasButtomFilmes(){
  return(
<Stack.Navigator>
    <Stack.Screen name="Filmes" component={Filmes} options={{headerShown:false}} />
    <Stack.Screen name="Aodisseia" component={Aodisseia} options={{ title: "A Odisseia"}}/>
    <Stack.Screen name="Sobrenatural" component={Sobrenatural} options={{ title: "Sobrenatural: Agora entre nós "}}/>
    <Stack.Screen name="Homemaranha" component={Homemaranha} options={{ title: "Homem aranha: um novo dia"}}/>
    <Stack.Screen name="Residentevil" component={Residentevil} options={{ title: "Residentevil"}}/>
  </Stack.Navigator>
  );
}