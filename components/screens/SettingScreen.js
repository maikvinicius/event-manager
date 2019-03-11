import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class SettingScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Config',
    tabBarLabel: "Configurações",
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../../resources/icons/icon-settings.png')} style={[styles.icon, { tintColor: tintColor }]} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Configurações!</Text>
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

export default SettingScreen;
