import React from 'react';
import { MoviesContainer, MoviesTitle, MoviesPoster } from './styles/Movies.styles';

const Movies = ({ title, movies }) => {
  return (
    <MoviesContainer>
      <MoviesTitle>{title}</MoviesTitle>
      <div>
        {movies.map((movie) => (
          <MoviesPoster
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </MoviesContainer>
  );
};

export default Movies;