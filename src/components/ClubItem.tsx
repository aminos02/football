import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

type ClubItemProps = {
  name: string;
  country: string;
  logoUrl: string;
  onPress:()=>void;
};
export const ClubItem = ({name, logoUrl, country,onPress}: ClubItemProps) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: logoUrl}} style={styles.image} />
        <View style={styles.description}>
          <Text>{name}</Text>
          <Text>{country}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    columnGap: 8,
    backgroundColor: 'white',
  },
  image: {
    width: 50,
    height: 50,
    objectFit:'contain',
  },
  description: {
    justifyContent: 'center',
  },
});
