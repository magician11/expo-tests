import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 33,
    textAlign: 'center',
  },
});

class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Please Login</Text>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          onPress={this.props.login}
        />
      </View>
    );
  }
}

export default connect(null, ActionCreators)(AuthScreen);
