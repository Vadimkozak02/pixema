import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SelectedMovieTemplate } from '../../ui/templates/selected-movie-templates/selected-movie-template';
import { MainTemplate } from '../../ui/templates/main-template/main-template';
import { HeaderTemplate } from '../../ui/templates/header-template/header-template';
import { MovieCard } from '../../ui/movie-card/movie-card';
import { setSelectedMovie } from './selected-movie.slice';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const SelectedMovie: React.FC = () => {
  const selectedPost = useAppSelector(
    (state) => state.selectedMovie.selectedMovie
  );

  // Releases of the movie
  const objOfReleasesMovie = useAppSelector(
    (state) => state.selectedMovie.releasesOfMovie
  );

  let release = '';
  objOfReleasesMovie.items?.map((el) => {
    if (el.type === 'WORLD_PREMIER') {
      release = el.date;
    }
  });

  // BoxOffice of the movie
  const objOfBoxOffice = useAppSelector(
    (state) => state.selectedMovie.boxOfficeOfMovie
  );

  let worldBoxOffice;
  let rusBoxOffice;
  objOfBoxOffice.items?.map((el) => {
    if (el.type === 'WORLD') {
      worldBoxOffice = el.amount;
    } else if (el.type === 'RUS') {
      rusBoxOffice = el.amount;
    }
  });

  // Actors, Director, Writers
  const staff = useAppSelector((state) => state.selectedMovie.staffOfMovie);

  const idSelectedPost = useAppSelector(
    (state) => state.selectedMovie.idSelectedMovie
  );

  let allPosts = useAppSelector((state) => state.allPosts.allPosts);
  const dispatch = useAppDispatch();

  let allPostsWithoutSelected = Array.from(allPosts.items);
  const indexSelectedPost = allPostsWithoutSelected.findIndex(
    (el) => el.kinopoiskId === selectedPost.kinopoiskId
  );
  allPostsWithoutSelected.splice(indexSelectedPost, 1);

  const pageWidth = 240;
  const [offset, setOffset] = useState(0);
  const maxOffset = -pageWidth * (allPosts.items.length - 5);

  const leftTap = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + pageWidth;

      return Math.min(newOffset, 0);
    });

    return;
  };

  const rightTap = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - pageWidth;

      return Math.max(newOffset, maxOffset);
    });
  };

  console.log('idSelectedPost', idSelectedPost);

  return (
    <SelectedMovieWrapper>
      <MainTemplate />
      <SelectedMovieContentWrapper>
        <HeaderTemplate />
        <SelectedMovieTemplate
          img={<img src={selectedPost.posterUrl} alt="movieImg" />}
          genre={selectedPost.genres?.map((el) => el.genre + ' ')}
          title={selectedPost.nameRu}
          description={selectedPost.description}
          rating={
            selectedPost.ratingKinopoisk === null
              ? selectedPost.ratingImdb
              : selectedPost.ratingKinopoisk
          }
          runtime={selectedPost.filmLength + ' min'}
          year={selectedPost.year}
          released={release ? release : '2019-15-08'}
          boxOffice={worldBoxOffice ? `$${worldBoxOffice}` : `$${rusBoxOffice}`}
          country={selectedPost.countries?.map((el) => el.country + ' ')}
          // production={selectedPost.Production}
          // actors={selectedPost.Actors}
          // director={selectedPost.Director}
          // writers={selectedPost.Writer}
          offset={offset}
          maxOffset={maxOffset}
          leftTap={() => leftTap()}
          rightTap={() => rightTap()}
          recommendationMovie={allPostsWithoutSelected.map((item, index) => (
            <Link to={`/${item.kinopoiskId}`} key={index}>
              <MovieCard
                key={index}
                id={item.kinopoiskId}
                title={item.nameRu}
                genre={item.genres.map((el) => ' - ' + el.genre)}
                rating={
                  item.ratingKinopoisk === null
                    ? item.ratingImdb
                    : item.ratingKinopoisk
                }
                img={<img src={item.posterUrl} alt="movie" />}
                onClick={() => dispatch(setSelectedMovie(item.kinopoiskId))}
              ></MovieCard>
            </Link>
          ))}
        ></SelectedMovieTemplate>
      </SelectedMovieContentWrapper>
    </SelectedMovieWrapper>
  );
};

const SelectedMovieWrapper = styled.div`
  display: flex;
  background-color: var(--site-background-color);
  padding-left: 50px;
`;

const SelectedMovieContentWrapper = styled.div`
  width: 1200px;
  margin: 25px 0 60px;
`;
