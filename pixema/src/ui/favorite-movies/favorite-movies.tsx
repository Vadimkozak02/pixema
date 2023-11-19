import styled from 'styled-components';
import { MainTemplate } from '../templates/main-template/main-template';
import { HeaderTemplate } from '../templates/header-template/header-template';
import emptyFav from './img/emptyFavorites.png';
import { useAppSelector } from '../../hooks';
import { AddToFavorites } from '../../features/all-posts/addToFavorites/addToFavorites';

export const FavoriteMovies: React.FC = () => {
  // const activeTab = useAppSelector((state) => state.tabsMenu.activeTab);
  const favArr = useAppSelector((state) => state.addToFav.arrofFavoritesMovie);
  const isEmpty = favArr.length > 0;

  return (
    <>
      <FavoriteMoviesWrappes>
        <MainTemplate />
        <FavoriteMoviesContentWrapper>
          <HeaderTemplate />
          {isEmpty ? (
            <AddToFavorites />
          ) : (
            <EmptyFavorites>
              <img src={emptyFav} alt="empty favorites" />
              <p>No favorite movies</p>
            </EmptyFavorites>
          )}
        </FavoriteMoviesContentWrapper>
      </FavoriteMoviesWrappes>
    </>
  );
};

const FavoriteMoviesWrappes = styled.div`
  display: flex;
  background-color: var(--site-background-color);
  padding-left: 50px;
  background-size: cover;
`;

const FavoriteMoviesContentWrapper = styled.div`
  width: 1200px;
  margin: 25px 0 60px;
  display: flex;
  flex-wrap: wrap;
`;

const EmptyFavorites = styled.div`
  width: 925px;
  margin: 180px 0;

  img {
    display: block;
    margin: 0 auto 30px;
  }

  p {
    color: var(--text-secondary-color);
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }
`;
