import { Button, Text, View, Vibration } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';

export const Timer = props => {
  const [getSeconds, setSeconds] = useState(props.longerTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            setIsRunning(false);
            Vibration.vibrate([500, 500, 500]);
            return prevSeconds;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSeconds(newSeconds);
    setIsRunning(false);
  };

  return (
    <View>
      <Text style={styles.fontfifty}>Choose time</Text>

      <View style={styles.rowflex}>
        <Button title='25' onPress={() => {
          setSeconds(props.longerTime);
          newSeconds = props.longerTime;
        }}></Button>
        <Button title='5' onPress={() => {
          setSeconds(props.shorterTime);
          newSeconds = props.shorterTime;
        }}></Button>
      </View>

      <Text style={styles.fontfifty}>
        {(Math.floor(getSeconds / 60)).toString().padStart(2, '0')}:{(getSeconds % 60).toString().padStart(2, '0')}
      </Text>

      <View style={styles.rowflex}>
        <Button title='Start' color={'green'} onPress={startTimer}></Button>
        <Button title='Stop' color={'red'} onPress={stopTimer}></Button>
        <Button title='Reset' color={'orange'} onPress={resetTimer}></Button>
      </View>
    </View>
  );
};
