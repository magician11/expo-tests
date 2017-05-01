import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 33,
  },
  heading: {
    marginBottom: 33,
    fontSize: 33,
    textAlign: 'center',
  },
});

const AuthScreen = props => (
  <View style={styles.container}>
    <Text style={styles.heading}>Please Login</Text>
    <Button
      title="Sign In With Google"
      onPress={props.login}
      backgroundColor="#6495ED"
    />
  </View>
);

AuthScreen.propTypes = {
  login: React.PropTypes.func.isRequired,
};

export default connect(null, ActionCreators)(AuthScreen);
