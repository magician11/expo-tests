import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 3,
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  tick() {
    if (this.state.counter > 1) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      this.props.navigation.navigate('AuthScreen');
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name="computer" size={111} />
        <Text style={styles.heading}>loading in {this.state.counter}...</Text>
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
    fontSize: 33,
  },
});

export default SplashScreen;
