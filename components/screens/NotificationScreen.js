import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

class NotificationScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Notification',
    tabBarLabel: "Notificações",
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../../resources/icons/icon-notification.png')} style={[styles.icon, { tintColor: tintColor }]} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Notificações!</Text>
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

export default NotificationScreen;
