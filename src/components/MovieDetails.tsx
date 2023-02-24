import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  const {vote_average, genres, budget, overview} = movieFull;

  return (
    <>
      {/* Detalles */}
      <View style={styles.movieDetailsContainer}>
        <View style={styles.movieDetailsInnerContainer}>
          <Icon name="star" color="#faaf02" size={17} />
          <Text style={styles.voteStyle}>{vote_average}</Text>
          <Text style={styles.textStyle}>
            - {genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        {/* Historia */}
        <Text style={styles.mainTextStyle}>Historia</Text>
        <Text style={styles.overviewStyle}>{overview}</Text>
        <Text style={styles.mainTextStyle}>Presupuesto</Text>
        <Text style={styles.bugdetStyle}>
          {currencyFormatter.format(budget, {code: 'USD'})}
        </Text>
      </View>

      {/* Casting */}
      <View style={styles.castingContainer}>
        <Text style={{...styles.mainTextStyle, marginHorizontal: 20}}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.castingFlatList}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  movieDetailsContainer: {
    marginHorizontal: 20,
  },
  movieDetailsInnerContainer: {
    flexDirection: 'row',
  },
  textStyle: {
    marginLeft: 5,
  },
  mainTextStyle: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  overviewStyle: {
    fontSize: 16,
  },
  bugdetStyle: {
    fontSize: 18,
  },
  castingContainer: {
    marginTop: 10,
    marginBottom: 100,
  },
  castingFlatList: {
    marginTop: 10,
    height: 70,
  },
  voteStyle: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
