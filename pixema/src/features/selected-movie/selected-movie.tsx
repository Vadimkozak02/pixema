import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SelectedMovieTemplate } from '../../ui/templates/selected-movie-templates/selected-movie-template';
import { MainTemplate } from '../../ui/templates/main-template/main-template';
import { HeaderTemplate } from '../../ui/templates/header-template/header-template';
import { MovieCard } from '../../ui/movie-card/movie-card';
import { setSelectedMovie } from './selected-movie.slice';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Staff } from './types';
import {
  addIdPage,
  addToFav,
  isAddedToFav,
} from '../all-posts/addToFavorites/addToFavorites.slice';
import { getAllPosts } from '../all-posts/all-posts.slice';

export const SelectedMovie: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const { postId } = useParams();
  console.log('id', postId);
  const selectedPost = useAppSelector(
    (state) => state.selectedMovie.selectedMovie
  );

  const idSelectedMovie = useAppSelector(
    (state) => state.selectedMovie.idSelectedMovie
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
      worldBoxOffice = el.amount;
    } else if (el.type === 'RUS') {
      rusBoxOffice = el.amount;
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

  // Favorite
  let addToFavorite = () => {
    setIsClicked(!isClicked);
    dispatch(addToFav(selectedPost));
    dispatch(addIdPage(Number(postId)));
  };

  const addedToFav = useAppSelector(
    (state) => state.addToFav.arrofFavoritesMovie
  );
  let isAdded = false;
  addedToFav.map((el) => {
    if (el.kinopoiskId === Number(postId)) {
      isAdded = true;
    }
  });

  // Recommendations
  let allPosts = useAppSelector((state) => state.allPosts.allPosts);
  const isLoading = useAppSelector((state) => state.allPosts.isLoading);

  const recommendations = useAppSelector(
    (state) => state.allPosts.recommendationMovies
  );

  let allPostsWithoutSelected = Array.from(recommendations.items);
  if (isLoading === false) {
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

  const currentPage = useAppSelector((state) => state.allPosts.currentPage);

  useEffect(() => {
    dispatch(getAllPosts({ page: currentPage }));
  }, [dispatch, currentPage]);

  return (
    <SelectedMovieWrapper>
      <MainTemplate />
      <SelectedMovieContentWrapper>
        <HeaderTemplate />
        <SelectedMovieTemplate
          img={<img src={selectedPost.posterUrl} alt="movieImg" />}
          isAdded={isAdded}
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
          producers={producers.map((el) => el.nameRu + ' ')}
          actors={actors.map((el) => el.nameRu + ' ')}
          director={director}
          writers={writers.map((el) => el.nameRu)}
          offset={offset}
          maxOffset={maxOffset}
          addToFavorite={() => addToFavorite()}
          leftTap={() => leftTap()}
          rightTap={() => rightTap()}
          recommendationMovie={allPostsWithoutSelected.map((item, index) => (
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
                removeFromFav={() => null}
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
