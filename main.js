import Expo from 'expo';
import React from 'react';

import SplashScreen from './screens/splash-screen';
import AuthScreen from './screens/auth-screen';
import MainScreen from './screens/main-screen';

import { StackNavigator } from 'react-navigation';

const App = StackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    AuthScreen: { screen: AuthScreen },
    MainScreen: { screen: MainScreen },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: { visible: false },
    },
  },
);
//
// const BasicApp = StackNavigator({
//   Login: { screen: LoginScreen },
//   Main: { screen: MainScreen },
//   Profile: { screen: ProfileScreen },
// });

Expo.registerRootComponent(App);
