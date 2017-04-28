import firebase from 'firebase';
import Expo from 'expo';
import { AUTH_USER, SIGN_OUT_USER, LOGGING_IN } from './types';

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
console.log('Initialised Firebase');

export const login = () => {
  return async dispatch => {
    dispatch({type: LOGGING_IN});
    const {
      type,
      token,
    } = await Expo.Facebook.logInWithReadPermissionsAsync('903647429646348', {
      permissions: ['public_profile'],
    });

    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    firebase.auth().signInWithCredential(credential);
  };
};

export const logout = () => {
  console.log('calling logout method');
  firebase.auth().signOut();
};

export const verifyAuth = () => {
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      console.log('auth was changed...');
      if (user) {
        console.log('user logged in');
        dispatch({ type: AUTH_USER, user });
      } else {
        console.log('user logged out');
        dispatch({ type: SIGN_OUT_USER });
      }
    });
  };
};
