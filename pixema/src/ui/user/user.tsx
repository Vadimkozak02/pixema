import styled from 'styled-components';

type Props = {
  name: string;
};

export const User: React.FC<Props> = ({ name }) => {
  return (
    <UserWrapper>
      <UserInitials></UserInitials>
      <UserNameWrapper>
        <UserName>
          {name}
          <UserLogOut>Log Out</UserLogOut>
        </UserName>
      </UserNameWrapper>
    </UserWrapper>
  );
};

const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInitials = styled.div``;

const UserNameWrapper = styled.div`
  position: relative;
`;

const UserName = styled.button`
  border: none;
  background-color: transparent;
  color: var(--text-primary-color);
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  outline: none;
`;
const UserLogOut = styled.button`
  position: absolute;
  top: 20px;
  right: 0;
  width: 100px;
  border: var(--form-background-color);
  background-color: var(--form-background-color);
  font-size: 16px;
  font-weight: 500;
  /* color: var(--button-text-color); */
`;
