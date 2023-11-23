import styled from 'styled-components';
import { Input } from '../../ui/input/input';
import closeIco from './img/closeFiltersIco.svg';
import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilters } from './filters.slice';

type Props = {
  isActive: boolean;
  closeFilter: () => void;
};

export const Filters: React.FC<Props> = ({ isActive, closeFilter }) => {
  //   const isOpenRef = useRef(null);

  //   useEffect(() => {
  //     if (!isActive) return;

  //     const handleClick = (e) => {
  //       if (isOpenRef.current && !isOpenRef.current.contains(e.target)) {
  //         closeFilter();
  //       }
  //     };

  //     document.addEventListener('click', handleClick);

  //     return () => {
  //       document.removeEventListener('click', handleClick);
  //     };
  //   }, [isActive, closeFilter]);

  const [order, setOrder] = useState('RATING');
  const [keyword, setKeyword] = useState('');
  const [ratingFrom, setRatingFrom] = useState(0);
  const [ratingTo, setRatingTo] = useState(10);
  const [yearFrom, setYearFrom] = useState(1000);
  const [yearTo, setYearTo] = useState(3000);

  const dispatch = useAppDispatch();

  return (
    <FiltersWrapper
      style={{
        transform: isActive ? 'translate(294px, -25px)' : 'translate(0)',
        visibility: isActive ? 'visible' : 'hidden',
        opacity: isActive ? '1' : '0',
      }}
    >
      <FiltersContent>
        <FiltersTitleWrapper>
          <FiltersTitle>Filters</FiltersTitle>
          <FiltersCloseBtn onClick={() => closeFilter()}>
            <img src={closeIco} alt="close filters" />
          </FiltersCloseBtn>
        </FiltersTitleWrapper>
        <TypeOfFiltersWrapper>
          <TypeOfFiltersTitle>Sort by</TypeOfFiltersTitle>
          <TypeOfFiltersBtnWrap>
            <RatingWrapper>
              <RatingBtn
                id="radioRating"
                type="radio"
                value="RATING"
                onChange={({ currentTarget }) => setOrder(currentTarget.value)}
                checked={order === 'RATING'}
              />
              <label
                htmlFor="radioRating"
                style={{
                  backgroundColor:
                    order === 'RATING'
                      ? 'var(--filter-background-color)'
                      : 'var(--button-showMore-color)',
                }}
              >
                Rating
              </label>
            </RatingWrapper>
            <YearWrapper>
              <YearBtn
                id="radioYear"
                type="radio"
                value="YEAR"
                checked={order === 'YEAR'}
                onChange={({ currentTarget }) => setOrder(currentTarget.value)}
              />
              <label
                htmlFor="radioYear"
                style={{
                  backgroundColor:
                    order === 'YEAR'
                      ? 'var(--filter-background-color)'
                      : 'var(--button-showMore-color)',
                }}
              >
                Year
              </label>
            </YearWrapper>
          </TypeOfFiltersBtnWrap>
          <TypeOfFiltersLine></TypeOfFiltersLine>
        </TypeOfFiltersWrapper>
        <FilterByShortNameWrapper>
          <ByShortNameTitle>Full or short movie name</ByShortNameTitle>
          <Input
            labelText=""
            placeholder="Your text"
            type="text"
            onChange={({ currentTarget }) => setKeyword(currentTarget.value)}
          />
        </FilterByShortNameWrapper>
        {/* <FiltersByGenreWrapper>
          <GenreTitle>Genre</GenreTitle>
          <GenreTextArea></GenreTextArea>
        </FiltersByGenreWrapper> */}
        <FiltersByYearWrapper>
          <FiltersByYearTitle>Years</FiltersByYearTitle>
          <FiltersByYearInputWrapper>
            <Input
              labelText=""
              placeholder="From"
              onChange={({ currentTarget }) =>
                setYearFrom(+currentTarget.value)
              }
            />
            <Input
              labelText=""
              placeholder="To"
              onChange={({ currentTarget }) => setYearTo(+currentTarget.value)}
            />
          </FiltersByYearInputWrapper>
        </FiltersByYearWrapper>
        <FiltersByRatingWrapper>
          <FiltersByRatingTitle>Rating</FiltersByRatingTitle>
          <FiltersByRatingInputWrapper>
            <Input
              labelText=""
              placeholder="From"
              onChange={({ currentTarget }) =>
                setRatingFrom(+currentTarget.value)
              }
            />
            <Input
              labelText=""
              placeholder="To"
              onChange={({ currentTarget }) =>
                setRatingTo(+currentTarget.value)
              }
            />
          </FiltersByRatingInputWrapper>
        </FiltersByRatingWrapper>
        <FooterBtnWrapper>
          <ClearFilter onClick={() => closeFilter()}>Clear filter</ClearFilter>
          <ShowResults
            onClick={() =>
              dispatch(
                getFilters({
                  order: order,
                  keyword: keyword,
                  ratingFrom: ratingFrom,
                  ratingTo: ratingTo,
                  yearFrom: yearFrom,
                  yearTo: yearTo,
                })
              )
            }
          >
            Show results
          </ShowResults>
        </FooterBtnWrapper>
      </FiltersContent>
    </FiltersWrapper>
  );
};

const FiltersWrapper = styled.div`
  width: 518px;
  background-color: var(--form-background-color);
  border: 2px solid var(--input-border-color);
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 10px 0 0 10px;
  opacity: 0;
  transition: 0.3s;
  transform: translateX(10px);
  visibility: hidden;
  z-index: 10;
`;

const FiltersContent = styled.div`
  width: 420px;
  margin: auto;
`;

const FiltersTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const FiltersTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary-color);
`;

const FiltersCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 28px;

  img {
    width: 100%;
    opacity: 0.7;
    transition: 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

const TypeOfFiltersWrapper = styled.div``;
const TypeOfFiltersTitle = styled.p`
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary-color);
`;

const TypeOfFiltersBtnWrap = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--button-showMore-color);
  border: 2px solid var(--input-border-color);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 25px;
  padding: 2px;
`;

const RatingWrapper = styled.div`
  input {
    display: none;
  }

  label {
    display: inline-block;
    cursor: pointer;
    user-select: none;
    width: 169px;
    height: 100%;
    border-radius: 10px 0 0 10px;
    transition: 0.2s;
    background-color: var(--button-showMore-color);
    font-size: 16px;
    font-weight: 500;
    color: var(--text-primary-color);
    padding: 0px 15px;
    line-height: 55px;
    border: 1px solid var(--input-border-color);
    text-align: center;
  }

  /* input:checked + label {
    background-color: var(--filter-background-color);
  } */
`;

const RatingBtn = styled.input``;

const YearWrapper = styled.div`
  input {
    display: none;
  }

  label {
    display: inline-block;
    cursor: pointer;
    user-select: none;
    width: 169px;
    height: 100%;
    border-radius: 0 10px 10px 0;
    transition: 0.2s;
    background-color: var(--button-showMore-color);
    font-size: 16px;
    font-weight: 500;
    color: var(--text-primary-color);
    padding: 0px 15px;
    line-height: 55px;
    border: 1px solid var(--input-border-color);
    text-align: center;
  }

  input:checked + label {
    background-color: var(--filter-background-color);
  }
`;

const YearBtn = styled.input``;

const TypeOfFiltersLine = styled.div`
  border-bottom: 2px solid var(--button-showMore-color);
  margin-bottom: 30px;
`;

const FilterByShortNameWrapper = styled.div`
  input {
    width: 385px;
    line-height: 50px;
  }
`;

const ByShortNameTitle = styled.p`
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary-color);
`;

const FiltersByGenreWrapper = styled.div`
  margin-bottom: 20px;
`;
const GenreTitle = styled.p`
  font-weight: 600;
  color: var(--text-primary-color);
  margin: 0 0 10px;
`;
const GenreTextArea = styled.textarea`
  resize: none;
  outline: none;
  width: 410px;
  background-color: var(--button-showMore-color);
  border: 2px solid var(--input-border-color);
  height: 56px;
  border-radius: 10px;
`;

const FiltersByYearWrapper = styled.div``;

const FiltersByYearTitle = styled.p`
  font-weight: 600;
  color: var(--text-primary-color);
  margin: 0;
`;

const FiltersByYearInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    display: block;
    width: 60%;
    padding-right: 60px;
  }
`;

const FiltersByRatingWrapper = styled.div`
  margin-bottom: 50px;
`;

const FiltersByRatingTitle = styled.p`
  font-weight: 600;
  color: var(--text-primary-color);
  margin: 0;
`;

const FiltersByRatingInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    display: block;
    width: 60%;
    padding-right: 60px;
  }
`;

const FooterBtnWrapper = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const ClearFilter = styled.button`
  width: 200px;
  height: 56px;
  border-radius: 10px;
  background-color: var(--button-showMore-color);
  border: 2px solid var(--input-border-color);
  transition: 0.3s;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary-color);

  &:hover {
    color: var(--text-genre-color);
  }
`;

const ShowResults = styled.button`
  width: 200px;
  height: 56px;
  border-radius: 10px;
  background-color: var(--button-bg-primary-color);
  border: 2px solid var(--input-border-color);
  transition: 0.3s;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary-color);

  &:hover {
    background-color: var(--text-hover-color);
  }
`;
