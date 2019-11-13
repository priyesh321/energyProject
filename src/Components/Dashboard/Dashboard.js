import React, { Component } from 'react';
import { Text, View, Dimensions,TouchableOpacity } from "react-native";
import { PieChart } from 'react-native-chart-kit';


class Dashboard extends Component {
  render() {
    return (

      <View style={{ marginTop: 50 }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Monitor')}>
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
          Pie Chart
        </Text>
        </TouchableOpacity>

        <PieChart
          data={[
            {
              name: 'Reduce',
              population: 30,
              color: 'rgba(131, 167, 234, 1)',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'CO2',
              population: 80,
              color: '#F00',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Consumpation',
              population: 50,
              color: 'rgb(0, 0, 255)',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
          ]}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        //absolute //for the absolute number remove if you want percentage
        />

      </View>
    );
  }
}


export default Dashboard;

