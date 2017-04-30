import React from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';

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

const SplashScreen = () => (
  <View style={styles.container}>
    <Icon name="laptop" size={111} />
    <Text style={styles.heading}>initialising awesomeness...</Text>
    <ActivityIndicator size="large" />
  </View>
);

export default SplashScreen;
