import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}'s Profile'`,
  });

  render() {
    return (
      <View style={styles.container}>
        <Icon name="face" size={88} />
        <Text style={styles.text}>
          Welcome {this.props.navigation.state.params.name}
        </Text>
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
  text: {
    fontSize: 33,
  },
});

export default MainScreen;
