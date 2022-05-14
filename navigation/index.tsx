import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';

import SplashScreen from '../screens/SplashScreen';
import SetProjectEditorScreen from '../screens/ProjectEditorScreen';
import ResultScreen from '../screens/ResultScreen';
import React from 'react';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SetProjectEditorScreen" component={SetProjectEditorScreen} options={{ title: 'Configure your Project', headerShown: true }} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ title: 'Result' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
