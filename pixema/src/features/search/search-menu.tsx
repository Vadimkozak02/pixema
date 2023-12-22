import styled from 'styled-components';
import filterImg from './img/menu-search.svg';
import { useEffect, useRef, useState } from 'react';
import { Filters } from '../filters/filters';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { search, setSearchedText } from './search.slice';
import { SearchTemplate } from '../../ui/templates/search-template/search-template';
import { SiteLogo } from '../../ui/site-logo/site-logo';

export const SearchMenu: React.FC = () => {
  // const isOpenRef = useRef<HTMLInputElement>(null);

  // console.log('ref', isOpenRef.current);

  // useEffect(() => {
  //   if (!isOpen) return;

  //   // const handleClick = (event: Event) => {
  //   //   if (!isOpenRef.current) return;
  //   //   if (
  //   //     !isOpenRef.current.contains(
  //   //       (event.target as Node) || setIsOpen(!isOpen)
  //   //     )
  //   //   ) {
  //   //     setIsOpen(!isOpen);
  //   //   }
  //   // };

  //   const handleClick = (e: Event) => {
  //     if (!isOpenRef.current) return;
  //     if (!isOpenRef.current.contains(e.target as null)) {
  //       setIsOpen(!isOpen);
  //     }
  //     console.log('isOpen', isOpen);
  //   };

  //   document.addEventListener('click', handleClick);

  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //   };
  // }, [isOpen, setIsOpen]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // const [searchedText, setSearchedText] = useState<string>('');

  const searchedMovies = useAppSelector((state) => state.search.searchedPosts);
  const searchedText = useAppSelector((state) => state.search.searchedText);
  const searchCurrentPage = useAppSelector(
    (state) => state.search.searchCurrentPage
  );

  const filterIsAcive = useAppSelector((state) => state.filter.filterIsActive);

  const dispatch = useAppDispatch();

  return (
    <SearchWrapper>
      <SearchMenuWrapper>
        <SearchMenuInput
          type="input"
          placeholder="Search"
          onChange={(event) => {
            dispatch(setSearchedText(event.currentTarget.value));
            dispatch(
              search({
                search: event.currentTarget.value,
                page: searchCurrentPage,
              })
            );
          }}
        ></SearchMenuInput>
        <SearchMenuFilter onClick={() => setIsFilterOpen(!isFilterOpen)}>
          <img src={filterImg} alt="menuFilter" />
          <SearchMenuCircle
            style={{
              transform: filterIsAcive ? 'translateY(0)' : 'translateY(0)',
              visibility: filterIsAcive ? 'visible' : 'hidden',
              opacity: filterIsAcive ? '1' : '0',
            }}
          ></SearchMenuCircle>
        </SearchMenuFilter>
        <FiltersWrapper /*ref={isOpenRef}*/>
          <Filters
            isActive={isFilterOpen}
            closeFilter={() => setIsFilterOpen(!isFilterOpen)}
          />
        </FiltersWrapper>
        <DarkBg
          style={{
            opacity: isFilterOpen ? '0.8' : '0',
            zIndex: isFilterOpen ? '5' : '-1',
          }}
        ></DarkBg>
      </SearchMenuWrapper>
      {/* <SearchResultWrapper
        style={{
          display: searchedMovies.films.length === 0 ? 'none' : 'block',
        }}
      >
        {searchedMovies.searchFilmsCountResult === 0 &&
        searchedText.length > 0 ? (
          <div>no results</div>
        ) : (
          <SearchTemplate
            movie={searchedMovies}
            searchedString={searchedText}
          ></SearchTemplate>
        )}
      </SearchResultWrapper> */}
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1500px) {
    margin-right: 28px;
  }

  @media (max-width: 980px) {
    margin-right: 0;
  }
`;

const SearchMenuWrapper = styled.div`
  position: relative;
  width: 925px;
  transition: 0.3s;

  @media (max-width: 1500px) {
    width: 690px;
  }

  @media (max-width: 1250px) {
    width: 445px;
  }

  @media (max-width: 980px) {
    max-width: 360px;
  }
`;

const SiteLogoWrapper = styled.div`
  display: none;

  @media (max-width: 980px) {
    display: block;
  }
`;

const SearchMenuInput = styled.input`
  width: 900px;
  border: 2px solid var(--input-border-color);
  line-height: 55px;
  background-color: var(--input-background-color);
  border-radius: 10px;
  outline: none;
  padding-left: 20px;
  color: var(--text-primary-color);
  font-size: 16px;

  &::placeholder {
    color: var(--text-secondary-color);
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 1500px) {
    width: 96%;
  }

  @media (max-width: 1250px) {
    width: 95%;
  }

  @media (max-width: 980px) {
    width: 94%;
  }
`;

const SearchMenuFilter = styled.button`
  position: absolute;
  top: 22px;
  right: 15px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

const SearchMenuCircle = styled.div`
  position: absolute;
  bottom: 1px;
  left: 3px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--button-colorMode-active);
  opacity: 0;
  transition: 0.3s;
  transform: translateY(-10px);
  visibility: hidden;
`;

const FiltersWrapper = styled.div``;

const DarkBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: 0.5;
  z-index: -1;
  transition: 0.3s;
`;

const SearchResultWrapper = styled.div`
  margin-top: 50px;
  max-width: 1200px;
`;
