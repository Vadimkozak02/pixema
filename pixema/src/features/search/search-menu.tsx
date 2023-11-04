import styled from 'styled-components';
import filterImg from './img/menu-search.svg';

export const SearchMenu: React.FC = () => {
  return (
    <SearchMenuWrapper>
      <SearchMenuInput type="input" placeholder="Search"></SearchMenuInput>
      <SearchMenuFilter>
        <img src={filterImg} alt="menuFilter" />
      </SearchMenuFilter>
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
