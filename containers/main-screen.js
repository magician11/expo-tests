import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Button } from 'react-native-elements';
import { ActionCreators } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 33,
  },
});

const MainScreen = props => (
  <View style={styles.container}>
    <Card title={props.user.displayName} image={{ uri: props.user.photoURL }}>
      <Text style={{ marginBottom: 10 }}>
        {props.user.email}
      </Text>
      <Button onPress={props.logout} title="Logout" backgroundColor="#6495ED" />
    </Card>
  </View>
);

const mapStateToProps = state => ({ user: state.auth.user });

MainScreen.propTypes = {
  user: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, ActionCreators)(MainScreen);
