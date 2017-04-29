import React from 'react';
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

const MainScreen = props => (
  <View style={styles.container}>
    <Icon name="face" size={88} />
    <Text style={styles.text}>
      {props.user.displayName}
    </Text>
    <Text>
      {props.user.email}
    </Text>
    <Button
      raised
      icon={{ name: 'motorcycle' }}
      backgroundColor="#8E4585"
      style={{ marginTop: 33 }}
      onPress={props.logout}
      title="Logout"
    />
  </View>
);

const mapStateToProps = state => ({ user: state.auth.user });

MainScreen.propTypes = {
  user: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, ActionCreators)(MainScreen);
