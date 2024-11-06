import {StyleSheet, Text, View} from 'react-native';
import {Player, PlayerStats} from '../types';
import React from 'react';

type PlayerItemProps = Pick<Player, 'age' | 'name'> & PlayerStats;

export const PlayerItem = ({
  age,
  name,
  goals,
  matchesPlayed,
}: PlayerItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text>age: {age}</Text>
      <Text>goals : {goals}</Text>
      <Text>matches played : {matchesPlayed}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderColor: '#e6e4e3',
    borderWidth: 1,
    borderRadius: 12,
  },
  name: {
    fontSize: 16,
  },
});
