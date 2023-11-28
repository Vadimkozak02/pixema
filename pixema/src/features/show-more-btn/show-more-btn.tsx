import styled from 'styled-components';
import { useAppDispatch } from '../../hooks';
import spinnerImg from './img/spinner.svg';

export type Props = {
  changeCurrentPage: () => void;
};

export const ShowMore: React.FC<Props> = ({ changeCurrentPage }) => {
  const dispatch = useAppDispatch();
  return (
    <></>
    // <ShowMoreBtn onClick={() => dispatch(changeCurrentPage())}>
    //   Show more
    //   <img src={spinnerImg} alt="spinner" />
    // </ShowMoreBtn>
  );
};

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
