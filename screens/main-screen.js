import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import Swiper from 'react-native-swiper';

class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}'s Profile'`,
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome {this.props.navigation.state.params.name}
        </Text>
      </View>
    );
  }
  //
  //   render() {
  //     const { navigate } = this.props.navigation;
  //
  //     const styles = StyleSheet.create({
  //       wrapper: {
  // // flex: 1
  //       },
  //       slide1: {
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         backgroundColor: '#9DD6EB',
  //       },
  //       slide2: {
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         backgroundColor: '#97CAE5',
  //       },
  //       slide3: {
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         backgroundColor: '#92BBD9',
  //       },
  //       text: {
  //         color: '#fff',
  //         fontSize: 30,
  //         fontWeight: 'bold',
  //       }
  //     });
  //
  //     return (
  //       <View style={{flex: 1}}>
  //         <Button
  //           title="Go to Andrew's profile"
  //           onPress={() =>
  //             navigate('Profile', { name: 'Andrew' })
  //           }
  //         />
  //         <Swiper style={styles.wrapper} showsButtons={true} height={400}>
  //           <View style={styles.slide1}>
  //             <Text style={styles.text}>Hello Swiper</Text>
  //           </View>
  //           <View style={styles.slide2}>
  //             <Text style={styles.text}>Beautiful</Text>
  //           </View>
  //           <View style={styles.slide3}>
  //             <Text style={styles.text}>And simple</Text>
  //           </View>
  //         </Swiper>
  //
  //       </View>
  //     );
  //   }
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
