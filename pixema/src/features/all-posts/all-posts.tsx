import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  changeCurrentPage,
  getAllPosts,
  getCurrentScroll,
} from './all-posts.slice';
import { MovieCard } from '../../ui/movie-card/movie-card';
import { setSelectedMovie } from '../selected-movie/selected-movie.slice';
import { Link, useNavigate } from 'react-router-dom';
import { SearchMenu } from '../search/search-menu';
import spinnerImg from './img/spinner.svg';
import { User } from '../user/user';
import { MainTemplate } from '../../ui/templates/main-template/main-template';
import { HeaderTemplate } from '../../ui/templates/header-template/header-template';
import pointIco from './img/pointIco.svg';
import { SearchTemplate } from '../../ui/templates/search-template/search-template';
import { ShowMore } from '../show-more-btn/show-more-btn';
import { changeSearchCurrentPage } from '../search/search.slice';
import { getUserLS, setUserLS } from '../../api/user-localStorage';
import { setUser } from '../Auth/authorization.slice';
import { changeFiltersCurrentPage, getFilters } from '../filters/filters.slice';
import { ShowMoreSpinner } from '../../ui/spinner/show-more-spinner';
import { ThreeDotsSpinner } from '../../ui/spinner/three-dots-spinner';
import dotIco from './img/dotIco.svg';
import {
  Container,
  Stack,
  Pagination,
  PaginationItem,
  createTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import { ArrowBackIcon }

export const AllPosts: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const allPosts = useAppSelector((state) => state.allPosts.allPosts);
  let isLoading = useAppSelector((state) => state.allPosts.allPostsIsLoading);
  const currentPage = useAppSelector((state) => state.allPosts.currentPage);

  const searchedMovies = useAppSelector((state) => state.search.searchedPosts);
  const searchedText = useAppSelector((state) => state.search.searchedText);
  const isSearchLoading = useAppSelector(
    (state) => state.search.searchIsLoading
  );

  const filterArr = useAppSelector((state) => state.filter.filtersMovie);
  const filterIsActive = useAppSelector((state) => state.filter.filterIsActive);
  const currentFilters = useAppSelector((state) => state.filter.currentFilters);
  const isFilterLoadinig = useAppSelector(
    (state) => state.filter.isFilterLoading
  );
  const filtersCurrentPage = useAppSelector(
    (state) => state.filter.filtersCurrentPage
  );

  let moreThanTotalPages = false;
  if (filterArr.totalPages <= filtersCurrentPage) {
    moreThanTotalPages = true;
  }

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

  const [page, setPage] = useState(1);
  const pageQty = useAppSelector((state) => state.allPosts.allPosts.totalPages);

  useEffect(() => {
    dispatch(getAllPosts({ page: page }));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [dispatch, page]);

  return (
    <AllPostsWrapper>
      <MainTemplateDesktop>
        <MainTemplate />
      </MainTemplateDesktop>
      <AllPostContentWrapper>
        <HeaderTemplate />
        <AllPostContent>
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
                                    <AllPostsGenre key={index}>
                                      <div style={{ marginRight: '5px' }}>
                                        {el.genre}
                                      </div>
                                      <img src={dotIco} alt="dot" />
                                    </AllPostsGenre>
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
                          {allPosts.items?.map((item, index) => (
                            <Link to={`/${item.kinopoiskId}`} key={index}>
                              <MovieCard
                                key={index}
                                isAdded={false}
                                id={item.kinopoiskId}
                                title={item.nameRu}
                                genre={item.genres.map((el, index) =>
                                  el !== item.genres[item.genres.length - 1] ? (
                                    <AllPostsGenre key={index}>
                                      <div style={{ marginRight: '5px' }}>
                                        {el.genre}
                                      </div>
                                      <img src={dotIco} alt="dot" />
                                    </AllPostsGenre>
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
                <SearchTemplate
                  movie={searchedMovies}
                  searchedString={searchedText}
                ></SearchTemplate>
              )}
            </>
          )}
        </AllPostContent>

        {!isLoading &&
          !isSearchLoading &&
          !isFilterLoadinig &&
          searchedMovies.films.length === 0 &&
          filterArr.items.length === 0 && (
            <MyContainer
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
            </MyContainer>
          )}
      </AllPostContentWrapper>
    </AllPostsWrapper>
  );
};

const AllPostsWrapper = styled.div`
  display: flex;
  background-color: var(--site-background-color);
  padding-left: 50px;
  min-height: 1400px;

  @media (max-width: 1500px) {
    justify-content: center;
  }

  @media (max-width: 980px) {
    display: flex;
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }

  @media (max-width: 320px) {
    width: 80%;
  }
`;

const MainTemplateDesktop = styled.div`
  display: flex;

  @media (max-width: 980px) {
    display: none;
  }
`;

const AllPostContentWrapper = styled.div`
  margin: 25px 0 60px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const AllPostContent = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1500px) {
    max-width: 1000px;
  }

  @media (max-width: 1250px) {
    max-width: 720px;
  }

  @media (max-width: 980px) {
    justify-content: center;
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

const DotIco = styled.div`
  width: 5px;
  height: 5px;
  background-color: var(--dotIco-color);
`;

const AllPostsGenre = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

const MyContainer = styled(Container)`
  .css-1sazv7p-MuiStack-root {
    @media (max-width: 320px) {
      width: 100%;
    }
  }
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
