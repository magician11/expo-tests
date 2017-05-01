import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
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

const AuthScreen = props => {
  let content;

  if (props.isLoggingIn) {
    content = (
      <View>
        <Text style={styles.heading}>Logging in</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    content = (
      <View>
        <Text style={styles.heading}>Please Login</Text>
        <Button
          title="Sign In With Google"
          onPress={props.login}
          backgroundColor="#6495ED"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
};

AuthScreen.propTypes = {
  login: React.PropTypes.func.isRequired,
  isLoggingIn: React.PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ isLoggingIn: state.auth.isLoggingIn });

export default connect(mapStateToProps, ActionCreators)(AuthScreen);
