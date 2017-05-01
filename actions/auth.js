import firebase from 'firebase';
import Expo from 'expo';
import { AUTH_USER, SIGN_OUT_USER } from './types';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAV2c2OVa-4RMJNyvQSo-lOt-5Trbl3zLo',
  authDomain: 'testing-with-expo.firebaseapp.com',
  databaseURL: 'https://testing-with-expo.firebaseio.com',
  projectId: 'testing-with-expo',
  storageBucket: 'testing-with-expo.appspot.com',
  messagingSenderId: '721346052741',
};

firebase.initializeApp(config);

export const login = () => {
  return (dispatch) => {
    // Facebook login method -- not working
    // Expo.Facebook
    //   .logInWithReadPermissionsAsync('903647429646348', {
    //     permissions: ['public_profile'],
    //   })
    //   .then((result) => {
    //     const credential = firebase.auth.FacebookAuthProvider.credential(
    //       result.token,
    //     );

    // Google login method
    Expo.Google
      .logInAsync({
        androidClientId: '721346052741-uogptmariln7m1sf1g8vr2b87gro8jfd.apps.googleusercontent.com',
        iosClientId: '721346052741-61ct8rbk0idcrvh4cvkb37orhr3c9r0n.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      })
      .then((result) => {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken,
        );
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(() => dispatch({ type: AUTH_USER, user: result.user }));
      })
      .catch((err) => {
        console.log('Error with logging in..');
        console.log(err);
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    firebase.auth().signOut();
    dispatch({ type: SIGN_OUT_USER });
  };
};

export const verifyAuth = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: AUTH_USER, user });
      } else {
        dispatch({ type: SIGN_OUT_USER });
      }
    });
  };
};
