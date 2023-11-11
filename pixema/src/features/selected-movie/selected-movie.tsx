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
  const idSelectedPost = useAppSelector(
    (state) => state.selectedMovie.idSelectedMovie
  );

  let allPosts = useAppSelector((state) => state.allPosts.allPosts);
  const dispatch = useAppDispatch();

  let allPostsWithoutSelected = Array.from(allPosts.Search);
  const indexSelectedPost = allPostsWithoutSelected.findIndex(
    (el) => el.imdbID === selectedPost.imdbID
  );
  allPostsWithoutSelected.splice(indexSelectedPost, 1);

  const pageWidth = 240;
  const [offset, setOffset] = useState(0);
  const maxOffset = -pageWidth * (allPosts.Search.length - 5);

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

  useEffect(() => {
    dispatch(setSelectedMovie(idSelectedPost));
  }, [dispatch, idSelectedPost]);

  return (
    <SelectedMovieWrapper>
      <MainTemplate />
      <SelectedMovieContentWrapper>
        <HeaderTemplate />
        <SelectedMovieTemplate
          img={<img src={selectedPost.Poster} alt="movieImg" />}
          genre={selectedPost.Genre}
          title={selectedPost.Title}
          description={selectedPost.Plot}
          rating={selectedPost.imdbRating}
          runtime={selectedPost.Runtime}
          year={selectedPost.Year}
          released={selectedPost.Released}
          boxOffice={selectedPost.BoxOffice}
          country={selectedPost.Country}
          production={selectedPost.Production}
          actors={selectedPost.Actors}
          director={selectedPost.Director}
          writers={selectedPost.Writer}
          offset={offset}
          maxOffset={maxOffset}
          leftTap={() => leftTap()}
          rightTap={() => rightTap()}
          recommendationMovie={allPostsWithoutSelected.map((item, index) => (
            <Link to={`/${item.imdbID}`} key={index}>
              <MovieCard
                key={index}
                id={item.imdbID}
                title={item.Title}
                img={<img src={item.Poster} alt="movie" />}
                onClick={() => dispatch(setSelectedMovie(item.imdbID))}
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
