import { StackNavigator } from 'react-navigation';

import SplashScreen from '../containers/splash-screen';
import AuthScreen from '../containers/auth-screen';
import MainScreen from '../containers/main-screen';

const AppRoot = StackNavigator(
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

export default AppRoot;
