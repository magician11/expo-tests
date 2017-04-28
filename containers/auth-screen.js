import React, { Component } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
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
    let contentView;

    if (this.props.loggingIn) {
      contentView = <ActivityIndicator />;
    } else {
      contentView = (
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          onPress={this.props.login}
        />
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Please Login</Text>
        {contentView}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { loggingIn: state.auth.loggingIn };
};

export default connect(mapStateToProps, ActionCreators)(AuthScreen);
