import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native'

const BotaoTeste = styled.TouchableHighlight`
      padding: 10px;
      background-color: #000000;
      border: 1px solid #000;
`
const TituloTeste = styled.Text`
      color: #FFFFFF;
      font-size: 20px;
`

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
        <BotaoTeste>
          <TituloTeste> Styled Components </TituloTeste>
        </BotaoTeste>
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
