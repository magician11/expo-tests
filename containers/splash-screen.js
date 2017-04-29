import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';

class SplashScreen extends Component {
  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.navigation.navigate('MainScreen');
    } else {
      this.props.navigation.navigate('AuthScreen');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name="computer" size={111} />
        <Text style={styles.heading}>initialising awesomeness...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    marginBottom: 33,
  },
});

const mapStateToProps = state => {
  return { loggedIn: state.auth.isLoggedIn };
};

export default connect(mapStateToProps)(SplashScreen);
