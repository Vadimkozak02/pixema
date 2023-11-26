import styled from 'styled-components';
import { SearchMenu } from '../../../features/search/search-menu';
import { User } from '../../user/user';

export const HeaderTemplate: React.FC = () => {
  return (
    <>
      <AllPostHeaderWrapper>
        <SearchMenu />
        <User />
      </AllPostHeaderWrapper>
    </>
  );
};

const AllPostHeaderWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
