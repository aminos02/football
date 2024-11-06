import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {mainNavigatorRoutes} from './routes';
import {MainNavigatorParamList} from './types';
import React from 'react';

const Stack = createNativeStackNavigator();
export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      {Object.entries(mainNavigatorRoutes).map(([name, screen]) => (
        <Stack.Screen
          name={name as keyof MainNavigatorParamList}
          component={screen.component}
          key={name}
        />
      ))}
    </Stack.Navigator>
  );
};
