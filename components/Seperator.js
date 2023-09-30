import React from 'react';
import { View, StyleSheet } from 'react-native';

const Seperator = () => {
  return (
    <View style={styles.line}></View>
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#E9ECEF', 
    borderBottomWidth: 1, 
    // marginVertical: 5,
    marginBottom: 10
  },
});

export default Seperator;
