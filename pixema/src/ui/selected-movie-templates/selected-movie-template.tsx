import React from 'react';
import styled from 'styled-components';

type Props = {
  img: React.ReactNode;
  title: React.ReactNode;
  rating: React.ReactNode;
  year: React.ReactNode;
  genre: React.ReactNode;
};

export const SelectedMovieTemplate: React.FC<Props> = ({
  img,
  title,
  rating,
  year,
  genre,
}) => {
  return (
    <SelectedMovieWrapper>
      <SelectedMovieImgWrapper>{img}</SelectedMovieImgWrapper>
      <SelectedMovieInfoWrapper>
        <SelectedMovieTitle>{title}</SelectedMovieTitle>
        <SelectedMovieRating>{rating}</SelectedMovieRating>
        <SelectedMovieYear>{year}</SelectedMovieYear>
        <SelectedMovieGenre>{genre}</SelectedMovieGenre>
      </SelectedMovieInfoWrapper>
    </SelectedMovieWrapper>
  );
};

const SelectedMovieWrapper = styled.div`
  width: 1200px;
  margin: auto;
`;

const SelectedMovieImgWrapper = styled.div`
  width: 30%;
  border: 1px solid blue;
`;

const SelectedMovieInfoWrapper = styled.div`
  width: 70%;
  border: 1px solid purple;
`;

const SelectedMovieTitle = styled.div``;
const SelectedMovieRating = styled.div``;
const SelectedMovieYear = styled.div``;
const SelectedMovieGenre = styled.div``;
