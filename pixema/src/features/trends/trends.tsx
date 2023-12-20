import styled from 'styled-components';
import { MainTemplate } from '../../ui/templates/main-template/main-template';
import { HeaderTemplate } from '../../ui/templates/header-template/header-template';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { MovieCard } from '../../ui/movie-card/movie-card';
import { setSelectedMovie } from '../selected-movie/selected-movie.slice';
import { allPostsItem } from '../all-posts/types';
import { useEffect, useState } from 'react';
import { changeCurrentPage, getTrendsMovie } from './trends.slice';
import { SearchTemplate } from '../../ui/templates/search-template/search-template';
import spinnerImg from './img/spinner.svg';
import { changeFiltersCurrentPage } from '../filters/filters.slice';
import { getUserLS } from '../../api/user-localStorage';
import { setUser } from '../Auth/authorization.slice';
import { ThreeDotsSpinner } from '../../ui/spinner/three-dots-spinner';
import { ShowMoreSpinner } from '../../ui/spinner/show-more-spinner';
import dotIco from './img/dotIco.svg';
import { Container, Pagination, PaginationItem, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Trends: React.FC = () => {
  const trendsPosts = useAppSelector((state) => state.trendsPosts.trendsMovie);
  const isLoading = useAppSelector((state) => state.trendsPosts.isLoading);
  const trendsCurrentPage = useAppSelector(
    (state) => state.trendsPosts.currentPage
  );

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
    const userLs = getUserLS();
    if (userLs) {
      dispatch(
        setUser({
          email: userLs.email,
          token: userLs.token,
          id: userLs.id,
          colorMode: userLs.colorMode,
        })
      );
    }
  }, [dispatch]);

  const [page, setPage] = useState(1);
  const pageQty = useAppSelector(
    (state) => state.trendsPosts.trendsMovie.totalPages
  );

  useEffect(() => {
    dispatch(getTrendsMovie({ page: page }));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [dispatch, page]);

  return (
    <TrendsWrapper>
      <MainTemplate />
      <TrendsContentWrapper>
        <HeaderTemplate />
        <TrendsAllPosts>
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
                                genre={item.genres.map((el, index) =>
                                  el !== item.genres[item.genres.length - 1] ? (
                                    <TrendsGenre key={index}>
                                      <div style={{ marginRight: '5px' }}>
                                        {el.genre}
                                      </div>
                                      <img src={dotIco} alt="dot" />
                                    </TrendsGenre>
                                  ) : (
                                    el.genre
                                  )
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
                                genre={item.genres.map((el, index) =>
                                  el !== item.genres[item.genres.length - 1] ? (
                                    <TrendsGenre key={index}>
                                      <div style={{ marginRight: '5px' }}>
                                        {el.genre}
                                      </div>
                                      <img src={dotIco} alt="dot" />
                                    </TrendsGenre>
                                  ) : (
                                    el.genre
                                  )
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
        {/* <ShowMoreBtn
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
            dispatch(getTrendsMovie({ page: trendsCurrentPage }));
          }}
        >
          Show more
          {isLoading ? (
            <ShowMoreSpinner />
          ) : (
            <img src={spinnerImg} alt="spinner" />
          )}
        </ShowMoreBtn> */}

        {!isLoading &&
          !isSearchLoading &&
          searchedMovies.films.length === 0 && (
            <Container
              style={{
                width: '390px',
                margin: '0 auto',
              }}
            >
              <Stack spacing={2}>
                {!!pageQty && (
                  <MyPagination
                    count={pageQty}
                    page={page}
                    // color="primary"
                    sx={{
                      '& .Mui-selected': {
                        backgroundColor: 'green',
                      },
                    }}
                    onChange={(_, num) => {
                      setPage(num);
                    }}
                    renderItem={(item) => (
                      <PaginationItem
                        slots={{
                          previous: ArrowBackIcon,
                          next: ArrowForwardIcon,
                        }}
                        {...item}
                      />
                    )}
                  ></MyPagination>
                )}
              </Stack>
            </Container>
          )}
      </TrendsContentWrapper>
    </TrendsWrapper>
  );
};

const TrendsWrapper = styled.div`
  display: flex;
  background-color: var(--site-background-color);
  padding-left: 50px;
  min-height: 1400px;

  @media (max-width: 1500px) {
    justify-content: center;
  }
`;

const TrendsContentWrapper = styled.div`
  /* width: 1200px; */
  margin: 25px 0 60px;
`;

const TrendsAllPosts = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1500px) {
    max-width: 1000px;
  }

  @media (max-width: 1250px) {
    max-width: 720px;
  }
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

const TrendsGenre = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

const MyPagination = styled(Pagination)`
  ul {
    li {
      button {
        color: var(--text-primary-color);
        transition: 0.5s;
        &:hover {
          background-color: var(--navigation-hover-color);
        }
      }
      div {
        color: var(--text-primary-color);
      }
    }
  }
  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: var(--navigation-active-color);

    &:hover {
      background-color: var(--navigation-hover-color);
    }
  }
`;
