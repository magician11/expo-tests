import { StackNavigator } from 'react-navigation';

import SplashScreen from '../screens/splash-screen';
import AuthScreen from '../screens/auth-screen';
import MainScreen from '../screens/main-screen';

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

export default App;
