import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* switch btw 25 and 5 min */}
      <Text style={{fontSize:50}}>{minutes}:{seconds}</Text> {/* count down second until reach 00:00, then phone buzz */}
      <View style={{flexDirection:'row'}}>
        <Button title='Start'></Button>
        <Button title='Stop'></Button>
        <Button title='Reset'></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();