import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Welcome to your Application</Text>
    </View>
  );
};

export default HomeScreen;

export const styles = StyleSheet.create({
  viewStyle: {
    height: '100%',
    backgroundColor: '#54CBFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 5,
    textAlign: 'center',
  },
});
