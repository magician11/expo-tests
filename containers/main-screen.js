import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { ActionCreators } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 33,
  },
});

class MainScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Icon name="face" size={88} />
        <Text style={styles.text}>
          {this.props.user.displayName}
        </Text>
        <Text>
          {this.props.user.email}
        </Text>
        <Button
          raised
          icon={{ name: 'motorcycle' }}
          backgroundColor="#8E4585"
          style={{ marginTop: 33 }}
          onPress={this.props.logout}
          title="Logout"
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, ActionCreators)(MainScreen);
