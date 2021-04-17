import React from 'react';
import { View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  return (
   <View>
     <AppContainer/>
   </View>
  );
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
})

const AppContainer = createAppContainer(AppNavigator);

