import styled from 'styled-components';
import { MainTemplate } from '../../ui/templates/main-template/main-template';
import { HeaderTemplate } from '../../ui/templates/header-template/header-template';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { MovieCard } from '../../ui/movie-card/movie-card';
import { setSelectedMovie } from '../selected-movie/selected-movie.slice';
import { allPostsItem } from '../all-posts/types';
import { useEffect } from 'react';
import { getTrendsMovie } from './trends.slice';
import { SearchTemplate } from '../../ui/templates/search-template/search-template';

export const Trends: React.FC = () => {
  const trendsPosts = useAppSelector((state) => state.trendsPosts.trendsMovie);
  const currentPage = useAppSelector((state) => state.trendsPosts.currentPage);

  const searchedMovies = useAppSelector((state) => state.search.searchedPosts);
  const searchedText = useAppSelector((state) => state.search.searchedText);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrendsMovie({ page: currentPage }));
  }, [dispatch, currentPage]);

  return (
    <TrendsWrapper>
      <MainTemplate />
      <TrendsContentWrapper>
        <HeaderTemplate />
        <TrendsAllPosts>
          {/* {trendsPosts.items?.map((item, index) => (
            <Link to={`/${item.kinopoiskId}`} key={index}>
              <MovieCard
                key={index}
                isAdded={false}
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
          ))} */}

          {searchedMovies.films.length === 0 ? (
            <>
              {trendsPosts.items?.map((item, index) => (
                <Link to={`/${item.kinopoiskId}`} key={index}>
                  <MovieCard
                    key={index}
                    isAdded={false}
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
            </>
          ) : (
            <>
              <SearchTemplate
                movie={searchedMovies}
                searchedString={searchedText}
              ></SearchTemplate>
            </>
          )}
        </TrendsAllPosts>
      </TrendsContentWrapper>
    </TrendsWrapper>
  );
};

const TrendsWrapper = styled.div`
  display: flex;
  background-color: var(--site-background-color);
  padding-left: 50px;
`;

const TrendsContentWrapper = styled.div`
  width: 1200px;
  margin: 25px 0 60px;
`;

const TrendsAllPosts = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;
