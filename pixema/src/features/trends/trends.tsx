import styled from 'styled-components';
import { MainTemplate } from '../../ui/templates/main-template/main-template';
import { HeaderTemplate } from '../../ui/templates/header-template/header-template';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { MovieCard } from '../../ui/movie-card/movie-card';
import { setSelectedMovie } from '../selected-movie/selected-movie.slice';
import { allPostsItem } from '../all-posts/types';
import { useEffect } from 'react';
import { changeCurrentPage, getTrendsMovie } from './trends.slice';
import { SearchTemplate } from '../../ui/templates/search-template/search-template';
import spinnerImg from './img/spinner.svg';
import { changeFiltersCurrentPage } from '../filters/filters.slice';
import { getUserLS } from '../../api/user-localStorage';
import { setUser } from '../Auth/authorization.slice';
import { ThreeDotsSpinner } from '../../ui/spinner/three-dots-spinner';
import { ShowMoreSpinner } from '../../ui/spinner/show-more-spinner';

export const Trends: React.FC = () => {
  const trendsPosts = useAppSelector((state) => state.trendsPosts.trendsMovie);
  const isLoading = useAppSelector((state) => state.trendsPosts.isLoading);
  const currentPage = useAppSelector((state) => state.trendsPosts.currentPage);

  const searchedMovies = useAppSelector((state) => state.search.searchedPosts);
  const searchedText = useAppSelector((state) => state.search.searchedText);
  const isSearchLoading = useAppSelector(
    (state) => state.search.searchIsLoading
  );

  const filterArr = useAppSelector((state) => state.filter.filtersMovie);
  const isFilterLoadinig = useAppSelector(
    (state) => state.filter.isFilterLoading
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const LSUser = getUserLS();
    if (LSUser) {
      dispatch(
        setUser({
          email: LSUser.email,
          token: LSUser.token,
          id: LSUser.id,
          colorMode: LSUser.colorMode,
        })
      );
    }
  }, [dispatch, currentPage]);

  if (trendsPosts.items.length === 0) {
    dispatch(getTrendsMovie({ page: 1 }));
  }

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

          {isLoading || isFilterLoadinig || isSearchLoading ? (
            <ThreeDotsSpinner />
          ) : (
            <>
              {searchedMovies.films.length === 0 ? (
                <>
                  {searchedMovies.searchFilmsCountResult === 0 &&
                  searchedText.length > 0 ? (
                    <div
                      style={{
                        color: 'var(--text-primary-color)',
                        fontSize: '18px',
                        fontWeight: '600',
                        marginBottom: '40px',
                      }}
                    >
                      No movies were found for this request
                    </div>
                  ) : (
                    <>
                      {filterArr.items.length > 0 ? (
                        <>
                          {filterArr.items?.map((item, index) => (
                            <Link to={`/${item.kinopoiskId}`} key={index}>
                              <MovieCard
                                key={index}
                                isAdded={false}
                                id={item.kinopoiskId}
                                title={item.nameRu}
                                genre={item.genres.map(
                                  (el) => ' - ' + el.genre
                                )}
                                rating={
                                  item.ratingKinopoisk === null
                                    ? item.ratingImdb
                                    : item.ratingKinopoisk
                                }
                                img={<img src={item.posterUrl} alt="movie" />}
                                onClick={() => {
                                  dispatch(setSelectedMovie(item.kinopoiskId));
                                  window.scrollTo(0, 0);
                                }}
                                removeFromFav={() => null}
                              ></MovieCard>
                            </Link>
                          ))}
                        </>
                      ) : (
                        <>
                          {trendsPosts.items?.map((item, index) => (
                            <Link to={`/${item.kinopoiskId}`} key={index}>
                              <MovieCard
                                key={index}
                                isAdded={false}
                                id={item.kinopoiskId}
                                title={item.nameRu}
                                genre={item.genres.map(
                                  (el) => ' - ' + el.genre
                                )}
                                rating={
                                  item.ratingKinopoisk === null
                                    ? item.ratingImdb
                                    : item.ratingKinopoisk
                                }
                                img={<img src={item.posterUrl} alt="movie" />}
                                onClick={() => {
                                  dispatch(setSelectedMovie(item.kinopoiskId));
                                  window.scrollTo(0, 0);
                                }}
                                removeFromFav={() => null}
                              ></MovieCard>
                            </Link>
                          ))}
                        </>
                      )}
                    </>
                  )}
                </>
              ) : (
                <>
                  <SearchTemplate
                    movie={searchedMovies}
                    searchedString={searchedText}
                  ></SearchTemplate>
                </>
              )}
            </>
          )}
        </TrendsAllPosts>
        <ShowMoreBtn
          style={{
            display:
              searchedMovies.films?.length > 0 ||
              isLoading ||
              isFilterLoadinig ||
              isSearchLoading
                ? 'none'
                : 'flex',
          }}
          onClick={() => {
            dispatch(changeCurrentPage());
            dispatch(getTrendsMovie({ page: currentPage }));
          }}
        >
          Show more
          {isLoading ? (
            <ShowMoreSpinner />
          ) : (
            <img src={spinnerImg} alt="spinner" />
          )}
        </ShowMoreBtn>
      </TrendsContentWrapper>
    </TrendsWrapper>
  );
};

const TrendsWrapper = styled.div`
  display: flex;
  background-color: var(--site-background-color);
  padding-left: 50px;
  min-height: 1400px;
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

const ShowMoreBtn = styled.button`
  width: 160px;
  line-height: 40px;
  border: none;
  border-radius: 40px;
  background-color: var(--button-showMore-color);
  color: var(--button-text-color);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin: auto;
`;
