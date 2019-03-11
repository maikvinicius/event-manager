import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class UserScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'User',
    tabBarLabel: "Minha Conta",
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../../resources/icons/icon-user.png')} style={[styles.icon, { tintColor: tintColor }]} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Conta do usuário!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default UserScreen;
