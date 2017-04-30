import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, NavigationActions } from 'react-navigation';

import SplashScreen from '../components/splash-screen';
import AuthScreen from './auth-screen';
import MainScreen from './main-screen';

import { ActionCreators } from '../actions';

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

class App extends Component {
  componentDidMount() {
    this.props.verifyAuth();
    setTimeout(() => {
      this.routeOnAuth();
    }, 3000);
  }

  componentDidUpdate() {
    this.routeOnAuth();
  }

  routeOnAuth() {
    const navigateTo = (routeName) => {
      const actionToDispatch = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })],
      });
      this.navigator.dispatch(actionToDispatch);
    };

    if (this.props.loggedIn) {
      navigateTo('MainScreen');
    } else {
      navigateTo('AuthScreen');
    }
  }

  render() {
    return (
      <AppRoot
        ref={(nav) => {
          this.navigator = nav;
        }}
      />
    );
  }
}

const mapStateToProps = state => ({ loggedIn: state.auth.isLoggedIn });

App.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  verifyAuth: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, ActionCreators)(App);
