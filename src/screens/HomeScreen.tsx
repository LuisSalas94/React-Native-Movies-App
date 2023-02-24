//* React Native components
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
//* Custom hook
import {useMovies} from '../hooks/useMovies';
//*Carousel
import Carousel from 'react-native-snap-carousel';
import {MoviePoster} from '../components/MoviePoster';

//* Window width
const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {nowPlaying, isLoading} = useMovies();

  console.log('Home screen', nowPlaying);

  if (isLoading) {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator size={300} color="grey" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.homeScreenContainer}>
        {/* Carousel */}
        <View style={styles.carouselContainer}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    marginTop: 20,
  },
  carouselContainer: {
    height: 440,
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
