import styled from 'styled-components';
import filterImg from './img/menu-search.svg';
import { useEffect, useRef, useState } from 'react';
import { Filters } from '../filters/filters';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { search, setSearchedText } from './search.slice';
import { SearchTemplate } from '../../ui/templates/search-template/search-template';

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

  const [isOpen, setIsOpen] = useState(false);
  // const [searchedText, setSearchedText] = useState<string>('');

  const searchedMovies = useAppSelector((state) => state.search.searchedPosts);

  const dispatch = useAppDispatch();

  return (
    <SearchMenuWrapper>
      <SearchMenuInput
        type="input"
        placeholder="Search"
        onChange={(event) => {
          dispatch(setSearchedText(event.currentTarget.value));
          dispatch(search({ search: event.currentTarget.value, page: 1 }));
        }}
      ></SearchMenuInput>
      <SearchMenuFilter onClick={() => setIsOpen(!isOpen)}>
        <img src={filterImg} alt="menuFilter" />
      </SearchMenuFilter>
      <FiltersWrapper /*ref={isOpenRef}*/>
        <Filters isActive={isOpen} closeFilter={() => setIsOpen(!isOpen)} />
      </FiltersWrapper>
      <DarkBg
        style={{
          opacity: isOpen ? '0.8' : '0',
          zIndex: isOpen ? '5' : '-1',
        }}
      ></DarkBg>
      {/* <SearchTemplate
        movie={searchedMovies}
        // searchedString={searchedText}
      ></SearchTemplate> */}
    </SearchMenuWrapper>
  );
};

const SearchMenuWrapper = styled.div`
  position: relative;
  width: 925px;
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
`;

const SearchMenuFilter = styled.button`
  position: absolute;
  top: 22px;
  right: 15px;
  border: none;
  cursor: pointer;
  background-color: transparent;
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
