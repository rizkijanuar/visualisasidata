import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Lines from './components/Lines';
import Bazier from './components/Bazier';
import Bar from './components/Bar';
import Stacked from './components/Stacked';
import Pie from './components/Pie';
import Progress from './components/Progress';
import Contribrute from './components/Contribrute';


export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <View style={styles.body}>
            
            {/* 1. Line Chart */}
            <Lines style={styles.chart} />

            {/* 2. Bezier Chart */}
            <Bazier style={styles.chart} />

            {/* 3. Bar Chart */}
            <Bar style={styles.chart} />

            {/* 4. Stacked rChart */}
            <Stacked style={styles.chart} />

            {/* 5. PieChart */}
            <Pie style={styles.chart} />

            {/* 6. Progress Chart */}
            <Progress style={styles.chart} />

            {/* 7. Contribrute Chart */}
            <Contribrute style={styles.chart} />

            <View style={styles.spacer}></View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    paddingVertical: 20,
  },
  chart: {
    marginBottom: 20,
  },
  spacer: {
    height: 200,
  },
});
