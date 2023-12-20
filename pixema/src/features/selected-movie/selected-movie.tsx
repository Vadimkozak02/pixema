import styled from 'styled-components';
import { useAppDispatch, useAppSelector, useAuth } from '../../hooks';
import { SelectedMovieTemplate } from '../../ui/templates/selected-movie-templates/selected-movie-template';
import { MainTemplate } from '../../ui/templates/main-template/main-template';
import { HeaderTemplate } from '../../ui/templates/header-template/header-template';
import { MovieCard } from '../../ui/movie-card/movie-card';
import { setSelectedMovie } from './selected-movie.slice';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SelectedKinopoiskMovieResponse, Staff } from './types';
import {
  addIdPage,
  addToFav,
  isAddedToFav,
} from '../all-posts/addToFavorites/addToFavorites.slice';
import { getAllPosts } from '../all-posts/all-posts.slice';
import { getUserLS } from '../../api/user-localStorage';
import { setUser } from '../Auth/authorization.slice';
import { ThreeDotsSpinner } from '../../ui/spinner/three-dots-spinner';
import { getRecommendationMovies } from '../recommendation-movies/recommendation-movies.slice';
import dotIco from '../../ui/templates/selected-movie-templates/img/dotIco.svg';
import { getDatabase, ref, set } from 'firebase/database';
import { SearchTemplate } from '../../ui/templates/search-template/search-template';

export const SelectedMovie: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const { postId } = useParams();

  const selectedPost = useAppSelector(
    (state) => state.selectedMovie.selectedMovie
  );

  const isSelectedPostsLoading = useAppSelector(
    (state) => state.selectedMovie.isLoading
  );

  const idSelectedMovie = useAppSelector(
    (state) => state.selectedMovie.idSelectedMovie
  );

  const searchedMovies = useAppSelector((state) => state.search.searchedPosts);
  const searchedText = useAppSelector((state) => state.search.searchedText);
  const isSearchLoading = useAppSelector(
    (state) => state.search.searchIsLoading
  );

  const dispatch = useAppDispatch();

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
      worldBoxOffice = new Intl.NumberFormat('ru-RU').format(el.amount);
    } else if (el.type === 'RUS') {
      rusBoxOffice = new Intl.NumberFormat('ru-RU').format(el.amount);
    }
  });

  // Actors, Director, Writers
  const staff = useAppSelector((state) => state.selectedMovie.staffOfMovie);

  let director = '';
  let actors: Array<Staff> = [];
  let writers: Array<Staff> = [];
  let producers: Array<Staff> = [];
  staff[0]?.map((el) => {
    if (el.professionKey === 'DIRECTOR') {
      director = el.nameRu;
    } else if (el.professionKey === 'ACTOR') {
      actors.push(el);
      actors.splice(3, actors.length - 3);
    } else if (el.professionKey === 'WRITER') {
      writers.push(el);
      writers.splice(3, writers.length - 3);
    } else if (el.professionKey === 'PRODUCER') {
      producers.push(el);
      producers.splice(3, producers.length - 3);
    }
  });

  const producersArr = producers.filter((el) => el.nameRu !== '');

  // Favorite
  const addedToFav = useAppSelector(
    (state) => state.addToFav.arrofFavoritesMovie
  );
  let isAdded = false;
  addedToFav.map((el) => {
    if (el.kinopoiskId === Number(postId)) {
      isAdded = true;
    }
  });

  let addToFavorite = () => {
    setIsClicked(!isClicked);
    dispatch(addToFav(selectedPost));
    dispatch(addIdPage(Number(postId)));
  };

  const { email, id } = useAuth();
  const addInFirebase = () => {
    const db = getDatabase();
    set(ref(db, `/${id}`), {
      selectedPost,
      id: `${selectedPost.kinopoiskId}`,
    });
  };

  // useEffect(() => {
  //   const db = getDatabase();
  //   set(ref(db, 'selectedPost'), {
  //     uid: email,
  //     favPosts: addedToFav,
  //   });
  // }, [addedToFav, email]);

  // Recommendations
  let allPosts = useAppSelector((state) => state.allPosts.allPosts);
  const isAllPostsLoading = useAppSelector(
    (state) => state.allPosts.allPostsIsLoading
  );

  const recommendations = useAppSelector(
    (state) => state.recommendationMovies.recommendationMovies
  );

  let allPostsWithoutSelected = Array.from(recommendations.items);
  if (isAllPostsLoading === false) {
    const indexSelectedPost = allPostsWithoutSelected.findIndex(
      (el) => el.kinopoiskId === selectedPost.kinopoiskId
    );
    allPostsWithoutSelected.splice(indexSelectedPost, 1);
  }

  // Recommendation slider
  const pageWidth = 240;
  const [offset, setOffset] = useState(0);
  const maxOffset = -pageWidth * (recommendations.items.length - 5);

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

  useEffect(() => {
    localStorage.setItem('id', JSON.stringify(idSelectedMovie));
  }, [idSelectedMovie]);

  useEffect(() => {
    const id = localStorage.getItem('id');
    dispatch(setSelectedMovie(Number(id)));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRecommendationMovies({ page: 10 }));
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
  }, [dispatch]);

  // const genreArr = selectedPost.genres.map(el => {
  //   el +
  // })

  return (
    <>
      <SelectedMovieWrapper>
        <MainTemplate />
        <SelectedMovieContentWrapper>
          <HeaderTemplate />
          {isSelectedPostsLoading || isSearchLoading ? (
            <IsLoadingWrapper>
              <ThreeDotsSpinner />
            </IsLoadingWrapper>
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
                    <SelectedMovieTemplate
                      img={<img src={selectedPost.posterUrl} alt="movieImg" />}
                      isAdded={isAdded}
                      genre={selectedPost.genres?.map((el, index) =>
                        el !==
                        selectedPost.genres[selectedPost.genres.length - 1] ? (
                          <SelectedGenre key={index}>
                            <div style={{ marginRight: '5px' }}>{el.genre}</div>
                            <img src={dotIco} alt="dot" />
                          </SelectedGenre>
                        ) : (
                          el.genre
                        )
                      )}
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
                      boxOffice={worldBoxOffice ? worldBoxOffice : rusBoxOffice}
                      country={selectedPost.countries?.map((el) =>
                        el ===
                        selectedPost.countries[
                          selectedPost.countries.length - 1
                        ]
                          ? el.country + ''
                          : el.country + ', '
                      )}
                      producers={producersArr.map((el) =>
                        el === producersArr[producersArr.length - 1]
                          ? el.nameRu + ''
                          : el.nameRu + ', '
                      )}
                      actors={actors.map((el) =>
                        el === actors[actors.length - 1]
                          ? el.nameRu + ''
                          : el.nameRu + ', '
                      )}
                      director={director}
                      writers={writers.map((el) =>
                        el === writers[writers.length - 1]
                          ? el.nameRu + ''
                          : el.nameRu + ', '
                      )}
                      offset={offset}
                      maxOffset={maxOffset}
                      addToFavorite={() => {
                        addToFavorite();
                        addInFirebase();
                      }}
                      leftTap={() => leftTap()}
                      rightTap={() => rightTap()}
                      recommendationMovie={allPostsWithoutSelected.map(
                        (item, index) => (
                          <Link to={`/${item.kinopoiskId}`} key={index}>
                            <MovieCard
                              key={index}
                              isAdded={false}
                              id={item.kinopoiskId}
                              title={item.nameRu}
                              genre={item.genres.map((el, index) =>
                                el !== item.genres[item.genres.length - 1] ? (
                                  <RecommendationGenre key={index}>
                                    <div style={{ marginRight: '5px' }}>
                                      {el.genre}
                                    </div>
                                    <img src={dotIco} alt="dot" />
                                  </RecommendationGenre>
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
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: 'smooth',
                                });
                              }}
                              removeFromFav={() => null}
                            ></MovieCard>
                          </Link>
                        )
                      )}
                    ></SelectedMovieTemplate>
                  )}
                </>
              ) : (
                <SearchTemplate
                  movie={searchedMovies}
                  searchedString={searchedText}
                ></SearchTemplate>
              )}
            </>

            // <SelectedMovieTemplate
            //   img={<img src={selectedPost.posterUrl} alt="movieImg" />}
            //   isAdded={isAdded}
            //   genre={selectedPost.genres?.map((el, index) =>
            //     el !== selectedPost.genres[selectedPost.genres.length - 1] ? (
            //       <SelectedGenre key={index}>
            //         <div style={{ marginRight: '5px' }}>{el.genre}</div>
            //         <img src={dotIco} alt="dot" />
            //       </SelectedGenre>
            //     ) : (
            //       el.genre
            //     )
            //   )}
            //   title={selectedPost.nameRu}
            //   description={selectedPost.description}
            //   rating={
            //     selectedPost.ratingKinopoisk === null
            //       ? selectedPost.ratingImdb
            //       : selectedPost.ratingKinopoisk
            //   }
            //   runtime={selectedPost.filmLength + ' min'}
            //   year={selectedPost.year}
            //   released={release ? release : '2019-15-08'}
            //   boxOffice={worldBoxOffice ? worldBoxOffice : rusBoxOffice}
            //   country={selectedPost.countries?.map((el) =>
            //     el === selectedPost.countries[selectedPost.countries.length - 1]
            //       ? el.country + ''
            //       : el.country + ', '
            //   )}
            //   producers={producersArr.map((el) =>
            //     el === producersArr[producersArr.length - 1]
            //       ? el.nameRu + ''
            //       : el.nameRu + ', '
            //   )}
            //   actors={actors.map((el) =>
            //     el === actors[actors.length - 1]
            //       ? el.nameRu + ''
            //       : el.nameRu + ', '
            //   )}
            //   director={director}
            //   writers={writers.map((el) =>
            //     el === writers[writers.length - 1]
            //       ? el.nameRu + ''
            //       : el.nameRu + ', '
            //   )}
            //   offset={offset}
            //   maxOffset={maxOffset}
            //   addToFavorite={() => {
            //     addToFavorite();
            //     addInFirebase();
            //   }}
            //   leftTap={() => leftTap()}
            //   rightTap={() => rightTap()}
            //   recommendationMovie={allPostsWithoutSelected.map(
            //     (item, index) => (
            //       <Link to={`/${item.kinopoiskId}`} key={index}>
            //         <MovieCard
            //           key={index}
            //           isAdded={false}
            //           id={item.kinopoiskId}
            //           title={item.nameRu}
            //           genre={item.genres.map((el, index) =>
            //             el !== item.genres[item.genres.length - 1] ? (
            //               <RecommendationGenre key={index}>
            //                 <div style={{ marginRight: '5px' }}>{el.genre}</div>
            //                 <img src={dotIco} alt="dot" />
            //               </RecommendationGenre>
            //             ) : (
            //               el.genre
            //             )
            //           )}
            //           rating={
            //             item.ratingKinopoisk === null
            //               ? item.ratingImdb
            //               : item.ratingKinopoisk
            //           }
            //           img={<img src={item.posterUrl} alt="movie" />}
            //           onClick={() => {
            //             dispatch(setSelectedMovie(item.kinopoiskId));
            //             window.scrollTo({
            //               top: 0,
            //               left: 0,
            //               behavior: 'smooth',
            //             });
            //           }}
            //           removeFromFav={() => null}
            //         ></MovieCard>
            //       </Link>
            //     )
            //   )}
            // ></SelectedMovieTemplate>
          )}
        </SelectedMovieContentWrapper>
      </SelectedMovieWrapper>
    </>
  );
};

const SelectedMovieWrapper = styled.div`
  display: flex;
  background-color: var(--site-background-color);
  padding-left: 50px;
  min-height: 1400px;
`;

const SelectedMovieContentWrapper = styled.div`
  width: 1200px;
  margin: 25px 0 60px;
`;

const IsLoadingWrapper = styled.div`
  margin: 0 auto;
`;

const SelectedGenre = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

const RecommendationGenre = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;
