import React from 'react';
import styled from 'styled-components';
import favIco from './img/fav-ico.svg';
import shareIco from './img/share-ico.svg';
import imdbIco from './img/imdb-ico.svg';
import leftArrow from './img/left-arrow-ico.svg';
import rightArrow from './img/right-arrow-ico.svg';

type Props = {
  img: React.ReactNode;
  genre: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  rating: React.ReactNode;
  runtime: React.ReactNode;
  year: React.ReactNode;
  released: React.ReactNode;
  boxOffice: React.ReactNode;
  country: React.ReactNode;
  production: React.ReactNode;
  actors: React.ReactNode;
  director: React.ReactNode;
  writers: React.ReactNode;
  recommendationMovie: React.ReactNode;
  leftTap: () => void;
  rightTap: () => void;
};

export const SelectedMovieTemplate: React.FC<Props> = ({
  img,
  genre,
  title,
  description,
  rating,
  runtime,
  year,
  released,
  boxOffice,
  country,
  production,
  actors,
  director,
  writers,
  recommendationMovie,
  leftTap,
  rightTap,
}) => {
  return (
    <SelectedMovieWrapper>
      <SelectedMovieImgWrapper>
        <SelectedMovieImg>{img}</SelectedMovieImg>
        <SelectedMovieImgBtn>
          <SelectedMovieImgFavorites>
            <img src={favIco} alt="add to favorites" />
          </SelectedMovieImgFavorites>
          <SelectedMovieImgShare>
            <img src={shareIco} alt="share this movie" />
          </SelectedMovieImgShare>
        </SelectedMovieImgBtn>
      </SelectedMovieImgWrapper>
      <SelectedMovieContentWrapper>
        <SelectedMovieGenre>{genre}</SelectedMovieGenre>
        <SelectedMovieTitle>{title}</SelectedMovieTitle>
        <SelectedMovieRatingAndRuntime>
          <MovieRating>{rating}</MovieRating>
          <MovieRatingIMDb>
            <img src={imdbIco} alt="IMDb" /> {rating}
          </MovieRatingIMDb>
          <MovieRuntime>{runtime}</MovieRuntime>
        </SelectedMovieRatingAndRuntime>
        <SelectedMovieDescription>{description}</SelectedMovieDescription>
        <AboutMovieWrapper>
          <AboutMovieField>
            <div>Year</div>
            <div>Released</div>
            <div>BoxOffice</div>
            <div>Country</div>
            <div>Production</div>
            <div>Actors</div>
            <div>Director</div>
            <div>Writers</div>
          </AboutMovieField>
          <AboutMovieMeaning>
            <div>{year}</div>
            <div>{released}</div>
            <div>{boxOffice}</div>
            <div>{country}</div>
            <div>{production}</div>
            <div>{actors}</div>
            <div>{director}</div>
            <div>{writers}</div>
          </AboutMovieMeaning>
        </AboutMovieWrapper>
        <RecommendationsMovieWrapper>
          <RecommendationsHeader>
            <RecommendationsMovieTitle>
              Recommendations
            </RecommendationsMovieTitle>
            <RecommendationsArrow>
              <LeftArrow onClick={() => leftTap()}>
                <img src={leftArrow} alt="left arrow" />
              </LeftArrow>
              <RightArrow onClick={() => rightTap()}>
                <img src={rightArrow} alt="right arrow" />
              </RightArrow>
            </RecommendationsArrow>
          </RecommendationsHeader>
          <RecommendationsContentWrapper>
            <RecommendationsContent>
              {recommendationMovie}
            </RecommendationsContent>
          </RecommendationsContentWrapper>
        </RecommendationsMovieWrapper>
      </SelectedMovieContentWrapper>
    </SelectedMovieWrapper>
  );
};

const SelectedMovieWrapper = styled.div`
  display: flex;
`;

const SelectedMovieImgWrapper = styled.div`
  width: 205px;
  margin-right: 50px;
`;

const SelectedMovieImg = styled.div`
  width: 205px;
  height: 307px;
  margin-bottom: 25px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const SelectedMovieImgBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SelectedMovieImgFavorites = styled.button`
  width: 50%;
  background-color: var(--button-showMore-color);
  border: var(--input-border-color);
  border-right: 1px solid black;
  height: 46px;
  border-radius: 10px 0 0 10px;

  img {
    width: 12px;
    opacity: 0.6;
    transition: 0.3s;
  }

  &:hover {
    img {
      opacity: 1;
    }
  }
`;

const SelectedMovieImgShare = styled.button`
  width: 50%;
  background-color: var(--button-showMore-color);
  border: var(--input-border-color);
  height: 46px;
  border-radius: 0 10px 10px 0;

  img {
    width: 20px;
    opacity: 0.6;
    transition: 0.3s;
  }

  &:hover {
    img {
      opacity: 1;
    }
  }
`;

const SelectedMovieContentWrapper = styled.div`
  width: 680px;
`;

const SelectedMovieGenre = styled.div`
  color: var(--text-genre-color);
`;

const SelectedMovieTitle = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: var(--text-primary-color);
  margin: 20px 0;
`;

const SelectedMovieRatingAndRuntime = styled.div`
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-primary-color);
  margin-bottom: 30px;
`;

const MovieRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 28px;
  background-color: var(--rating-bg-color);
  border-radius: 6px;
`;
const MovieRatingIMDb = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 79px;
  height: 28px;
  background-color: var(--input-background-color);
  border-radius: 6px;

  img {
    width: 35px;
  }
`;
const MovieRuntime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 73px;
  height: 28px;
  background-color: var(--input-background-color);
  border-radius: 6px;
`;

const SelectedMovieDescription = styled.div`
  color: var(--text-primary-color);
  margin-bottom: 40px;
`;

const AboutMovieWrapper = styled.div`
  display: flex;
`;

const AboutMovieField = styled.div`
  margin-right: 50px;

  div {
    color: var(--text-primary-color);
    margin-bottom: 15px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const AboutMovieMeaning = styled.div`
  div {
    color: var(--text-primary-color);
    margin-bottom: 15px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const RecommendationsMovieWrapper = styled.div`
  width: 935px;
`;

const RecommendationsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RecommendationsMovieTitle = styled.p`
  color: var(--text-primary-color);
  font-size: 24px;
  font-weight: 600;
`;

const RecommendationsArrow = styled.div`
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftArrow = styled.button`
  border: none;
  background-color: transparent;
`;

const RightArrow = styled.button`
  border: none;
  background-color: transparent;
`;

const RecommendationsContentWrapper = styled.div`
  overflow: hidden;
`;

const RecommendationsContent = styled.div`
  position: relative;
  display: flex;
  /* right: 480px; */
`;