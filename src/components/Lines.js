import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
import {
  LineChart,
} from "react-native-chart-kit";

export default function Lines() {
  return (
    <View style={styles.sectionContainer}>
      <Text>
        1. Line Chart
      </Text>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width - 50} // from react-native
        height={220}
        yAxisLabel={"Rp"}
        chartConfig={{
          backgroundColor: "red",
          backgroundGradientFrom: "red",
          backgroundGradientTo: "red",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `white`,
          labelColor: (opacity = 1) => `white`,
          style: {
            borderRadius: 16
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
