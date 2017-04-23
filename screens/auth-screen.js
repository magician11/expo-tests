import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import Expo from 'expo';
// import firebase from 'firebase';
//
// // Initialize Firebase
// const config = {
//   apiKey: 'AIzaSyAV2c2OVa-4RMJNyvQSo-lOt-5Trbl3zLo',
//   authDomain: 'testing-with-expo.firebaseapp.com',
//   databaseURL: 'https://testing-with-expo.firebaseio.com',
//   projectId: 'testing-with-expo',
//   storageBucket: 'testing-with-expo.appspot.com',
//   messagingSenderId: '721346052741',
// };
//
// firebase.initializeApp(config);
//
// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log('logged in');
//     console.log(user);
//   } else {
//     console.log('no one is signed in');
//   }
// });

class AuthScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  logIn = async () => {
    const {
      type,
      token,
    } = await Expo.Facebook.logInWithReadPermissionsAsync('903647429646348', {
      permissions: ['public_profile'],
    });

    console.log('todo: add spinner to show we are logging in');

    if (type === 'success') {
      try {
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`,
        );

        const userDetails = await response.json();
        // console.log(userDetails);
        this.props.navigation.navigate('MainScreen', {
          name: userDetails.first_name,
          email: userDetails.email,
        });
      } catch (err) {
        console.error(err);
      }
      // console.log(name);
      // const credential = firebase.auth.FacebookAuthProvider.credential(token);
      // firebase.auth().signInWithCredential(credential);
      console.log('todo: add FB token to Firebase');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Please Login</Text>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          onPress={this.logIn}
        />
      </View>
    );
  }
}

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

export default AuthScreen;
