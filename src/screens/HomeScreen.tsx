import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useMovies} from '../hooks/useMovies';

const HomeScreen = () => {
  const {nowPlaying, isLoading} = useMovies();

  console.log('Home screen', JSON.stringify(nowPlaying, null, 4));

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
