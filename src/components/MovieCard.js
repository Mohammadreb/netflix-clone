
import React from "react";
import {
  MovieButton,
  MovieContainer,
  MovieDescription,
  MovieTitle,
} from "./MovieCard.styles";

function MovieCard({ movie }) {
  console.log(movie);
  return (
    <MovieContainer background={movie?.backdrop_path}>
      <MovieTitle>{movie?.name}</MovieTitle>
      <MovieDescription>{movie?.overview}</MovieDescription>
      <MovieButton>Play</MovieButton>
      <MovieButton>My List</MovieButton>
    </MovieContainer>
  );
}

export default MovieCard;
