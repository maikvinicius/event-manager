import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class EventListScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'EventList',
    tabBarLabel: "Eventos",
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../../resources/icons/icon-calendar.png')} style={[styles.icon, { tintColor: tintColor }]} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Lista de eventos!</Text>
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

export default EventListScreen;
