import {Button, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {ClubItem} from '../components/ClubItem';
import {useAppSelector} from '../redux/hooks';
import {Divider} from '../components/Divider';
import {useNavigation} from '../hooks/use-navigation';
export const ClubListScreen = () => {
  const {clubs} = useAppSelector(state => state.clubs);
  const {navigate} = useNavigation();

  const onPressAddClub = useCallback(() => {
    navigate('AddClubScreen');
  }, [navigate]);

  return (
    <React.Fragment>
      <FlatList
        data={clubs}
        renderItem={({item}) => (
          <ClubItem
            {...item}
            onPress={() => {
              navigate('ClubDetailScreen', {clubId: item.id});
            }}
          />
        )}
        keyExtractor={club => club.name}
        ItemSeparatorComponent={Divider}
      />
      <Button title="add club" onPress={onPressAddClub} />
    </React.Fragment>
  );
};
