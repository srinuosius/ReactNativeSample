import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const AboutScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>About</Text>
    </View>
  );
};

export default AboutScreen;

export const styles = StyleSheet.create({
  viewStyle: {
    height: '100%',
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 5,
  },
});
