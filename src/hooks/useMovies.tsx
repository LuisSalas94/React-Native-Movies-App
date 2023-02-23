import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie} from '../interfaces/movieInterface';

//* Interface to fetch movies
interface MoviesState {
  nowPlaying: Movie[];
}

export const useMovies = () => {
  //*Loading
  const [isLoading, setIsLoading] = useState(true);

  //* Use an empty array to make sure that the state is not null
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
  });

  //* Function to fetch movies
  const getMovies = async () => {
    //* Get all data at the same time
    const nowPlayingPromise = movieDB.get('/now_playing');
    const response = await Promise.all([nowPlayingPromise]);

    //* Set movie state
    setMoviesState({
      nowPlaying: response[0].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
