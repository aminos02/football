import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {useAppSelector} from '../redux/hooks';
import {useRoute} from '../hooks/use-route';
import {PlayerItem} from '../components/PlayerItem';
import {SafeAreaView} from 'react-native-safe-area-context';

const lastSeason = 2024;

export const ClubDetailScreen = () => {
  const {params} = useRoute<'ClubDetailScreen'>();
  const {clubId} = params;
  const selectedClub = useAppSelector(state => state.clubs).clubs.find(
    club => club.id === clubId,
  );
  const {players} = useAppSelector(state => state.players);
  const clubPlayers = useMemo(() => {
    return players?.filter(player =>
      player.history.find(
        history =>
          history.seasonYear === lastSeason && history.clubId === clubId,
      ),
    );
  }, [clubId, players]);
  console.log({clubPlayers});

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: selectedClub?.logoUrl}} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.name}>{selectedClub?.name}</Text>
        <Text style={styles.country}>country : {selectedClub?.country}</Text>
        <Text>season : {lastSeason}</Text>
      </View>
      <FlatList
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.playersContainer}
        renderItem={({item}) => {
          const history = item.history.find(
            h => h.seasonYear === lastSeason && h.clubId === clubId,
          );
          return <PlayerItem {...item} {...history?.stats} />;
        }}
        data={clubPlayers}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '40%',
    objectFit: 'contain',
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderColor: '#e6e3e9',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  playersContainer: {
    paddingHorizontal: 12,
    rowGap: 12,
    paddingVertical: 32,
  },
  country: {
    fontSize: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
});
