import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const AddScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Add</Text>
    </View>
  );
};

export default AddScreen;

export const styles = StyleSheet.create({
  viewStyle: {
    height: '100%',
    backgroundColor: 'green',
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
