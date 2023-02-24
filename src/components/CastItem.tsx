import React from 'react';
import {Cast} from '../interfaces/creditsInterface';
import {Text, View, StyleSheet, Image} from 'react-native';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const {name, character, profile_path} = actor;

  //* Get image path
  const uri = `https://image.tmdb.org/t/p/w500${profile_path}`;

  return (
    <View style={styles.castContainer}>
      {profile_path && <Image source={{uri}} style={styles.imageStyle} />}
      <View style={styles.actorInfo}>
        <Text style={styles.nameStyle}>{name}</Text>
        <Text style={styles.characterStyle}>{character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  castContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginHorizontal: 20,
    paddingRight: 15,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 2,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  characterStyle: {
    fontSize: 18,
    opacity: 0.7,
  },
});
