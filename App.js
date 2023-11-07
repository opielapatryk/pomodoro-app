import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';
import React from 'react';
import { styles } from './components/styles';
import { Timer } from './components/Timer';

export default function App() {
  return (
    <View style={styles.container}>
      <Timer longerTime={25*60} shorterTime={5*60} />  
      <StatusBar style="auto" />
    </View>
  );
}