import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../redux/hooks';
import {useRoute} from '../hooks/use-route';

export const ClubDetailScreen = () => {
  const {params} = useRoute<'ClubDetailScreen'>();
  const selectedClub = useAppSelector(state => state.clubs).clubs.find(
    club => club.id === params.clubId,
  );
  return (
    <View>
      <Image source={{uri: selectedClub?.logoUrl}} style={styles.image} />
      <Text>{selectedClub?.country}</Text>
      <Text>{selectedClub?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: '40%',
  },
});
