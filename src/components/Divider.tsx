import {StyleSheet, View} from 'react-native';
import React from 'react';

export const Divider = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: 'gray',
    width: '100%',
  },
});
