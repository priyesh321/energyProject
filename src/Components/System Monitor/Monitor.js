import React, { Component } from 'react';
import { View, Image } from "react-native";
import { Header } from 'react-native-elements';

class Monitor extends Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: 'System Monitor',
            fontSize: 20,
            color: '#fff',
            onPress: () => alert('ea'),
          }}
          backgroundColor="#008ECC"
        />
        <View style={{ justifyContent: 'center', marginTop: 30, alignItems: 'center' }}>
          <Image style={{ height: 80, width: 80 }}
            source={require('../../images/energy_solar_panel.png')} />
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={{
            height: 50,
            width: 3,
            backgroundColor: 'black'
          }}
          />
        </View>
        <View style={{ margin: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image style={{ height: 60, width: 60, marginTop: 10 }}
            source={require('../../images/tower.png')} />
          <Image style={{ height: 60, width: 60, marginTop: 10 }}
            source={require('../../images/home.png')} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -80 }}>
          <Image style={{ height: 100, width: 80 }}
            source={require('../../images/download.jpeg')} />
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
        }}>
          <View style={{
            height: 60,
            width: 3,
            backgroundColor: 'black'
          }}
          />
        </View>
        <View style={{ justifyContent: 'center', marginTop: 30, alignItems: 'center' }}>
          <Image style={{ height: 80, width: 80 }}
            source={require('../../images/battery-charging.png')} />
        </View>
      </View>
    );
  }
}

export default Monitor;