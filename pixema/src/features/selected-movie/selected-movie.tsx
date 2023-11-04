import styled from 'styled-components';
import { useAppSelector } from '../../hooks';
import { SelectedMovieTemplate } from '../../ui/selected-movie-templates/selected-movie-template';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const SelectedMovie: React.FC = () => {
  const selectedPost = useAppSelector(
    (state) => state.selectedMovie.selectedMovie
  );

  return (
    <SelectedMovieWrapper>
      <SelectedMovieTemplate
        img={<img src={selectedPost.Poster} alt="movieImg" />}
        title={selectedPost.Plot}
        rating={selectedPost.imdbRating}
        year={selectedPost.Year}
        genre={selectedPost.Genre}
      ></SelectedMovieTemplate>
    </SelectedMovieWrapper>
  );
};

const SelectedMovieWrapper = styled.div``;
