import styled from 'styled-components';
import { MainTemplate } from '../templates/main-template/main-template';
import { HeaderTemplate } from '../templates/header-template/header-template';
import { Input } from '../input/input';
import { ThemeSwitcher } from '../../features/theme-switcher/theme-switcher';
import { useAppDispatch, useAppSelector, useAuth } from '../../hooks';
import { SearchTemplate } from '../templates/search-template/search-template';
import { useEffect, useState } from 'react';
import { getUserLS } from '../../api/user-localStorage';
import { setUser } from '../../features/Auth/authorization.slice';

export const SettingsPage: React.FC = () => {
  const searchedMovies = useAppSelector((state) => state.search.searchedPosts);
  const searchedText = useAppSelector((state) => state.search.searchedText);

  const dispatch = useAppDispatch();

  const [password, setPassword] = useState('');

  const { isAuth, email } = useAuth();

  useEffect(() => {
    const LSUser = getUserLS();
    if (LSUser) {
      dispatch(
        setUser({ email: LSUser.email, token: LSUser.token, id: LSUser.id })
      );
    }
  }, [dispatch]);

  return (
    <SettingsWrapper>
      <MainTemplate />
      <SettingsContentWrapper>
        <HeaderTemplate />
        <SettingsBlocks>
          {/* <ProfileWrapper>
            <ProfileTitle>Profile</ProfileTitle>
            <ProfileContentWrapper>
              <Input labelText="Name"></Input>
              <Input labelText="Email"></Input>
            </ProfileContentWrapper>
          </ProfileWrapper>
          <PasswordWrapper>
            <PasswordTitle>Password</PasswordTitle>
            <PasswordContentWrapper>
              <Input labelText="Password" placeholder="Your password"></Input>
              <div>
                <Input
                  labelText="New password"
                  placeholder="New password"
                ></Input>
                <Input
                  labelText="Confirm password"
                  placeholder="Confirm password"
                ></Input>
              </div>
            </PasswordContentWrapper>
          </PasswordWrapper>

          <ColorModeWrapper>
            <ColorModeTitle>Color mode</ColorModeTitle>
            <ColorModeInfoWrapper>
              <ColorInfo>
                <ColorModeText>Dark</ColorModeText>
                <ColorModeDescription>Use dark thema</ColorModeDescription>
              </ColorInfo>
              <ThemeSwitcher />
            </ColorModeInfoWrapper>
          </ColorModeWrapper> */}

          {searchedMovies.films.length === 0 ? (
            <>
              <ProfileWrapper>
                <ProfileTitle>Profile</ProfileTitle>
                <ProfileContentWrapper>
                  <Input labelText="Name"></Input>
                  <Input
                    labelText="Email"
                    // value={email}
                    onChange={() => console.log('email')}
                  ></Input>

                  {/* <EmailContent>
                    <EmailLabel>Email</EmailLabel>
                    <EmailText>{email}</EmailText>
                  </EmailContent> */}
                </ProfileContentWrapper>
              </ProfileWrapper>
              <PasswordWrapper>
                <PasswordTitle>Password</PasswordTitle>
                <PasswordContentWrapper>
                  <Input
                    labelText="Password"
                    placeholder="Your password"
                    value={password}
                    onChange={({ currentTarget }) =>
                      setPassword(currentTarget.value)
                    }
                  ></Input>
                  <div>
                    <Input
                      labelText="New password"
                      placeholder="New password"
                    ></Input>
                    <Input
                      labelText="Confirm password"
                      placeholder="Confirm password"
                    ></Input>
                  </div>
                </PasswordContentWrapper>
              </PasswordWrapper>

              <ColorModeWrapper>
                <ColorModeTitle>Color mode</ColorModeTitle>
                <ColorModeInfoWrapper>
                  <ColorInfo>
                    <ColorModeText>Dark</ColorModeText>
                    <ColorModeDescription>Use dark thema</ColorModeDescription>
                  </ColorInfo>
                  <ThemeSwitcher />
                </ColorModeInfoWrapper>
              </ColorModeWrapper>
            </>
          ) : (
            <>
              <SearchTemplate
                movie={searchedMovies}
                searchedString={searchedText}
              ></SearchTemplate>
            </>
          )}
        </SettingsBlocks>
      </SettingsContentWrapper>
    </SettingsWrapper>
  );
};

const SettingsWrapper = styled.div`
  display: flex;
  background-color: var(--site-background-color);
  padding-left: 50px;
`;

const SettingsContentWrapper = styled.div`
  width: 925px;
  margin: 25px 0 60px;
`;

const SettingsBlocks = styled.div``;

const ProfileWrapper = styled.div`
  margin-bottom: 50px;
`;
const ProfileTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary-color);
`;
const ProfileContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--form-background-color);
  border: 2px solid var(--input-border-color);
  border-radius: 10px;
  padding: 60px 40px 20px;

  input {
    width: 360px;
    border: 2px solid var(--input-border-color);
  }
`;

const EmailContent = styled.div``;

const EmailLabel = styled.div`
  font-weight: 600;
  text-align: start;
  margin-bottom: 10px;
  text-transform: capitalize;
  color: var(--text-primary-color);
`;

const EmailText = styled.div`
  border: 1px solid transparent;
  border-radius: 10px;
  width: 380px;
  line-height: 56px;
  background-color: var(--input-background-color);
  border: 2px solid var(--input-border-color);
  padding: 5px 15px;
  margin-bottom: 24px;
`;

const PasswordWrapper = styled.div`
  margin-bottom: 50px;
`;
const PasswordTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary-color);
`;
const PasswordContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--form-background-color);
  border: 2px solid var(--input-border-color);
  border-radius: 10px;
  padding: 50px 40px 20px;

  input {
    width: 360px;
    border: 2px solid var(--input-border-color);
  }
`;

const ColorModeWrapper = styled.div``;

const ColorModeTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary-color);
`;

const ColorModeInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--form-background-color);
  border: 2px solid var(--input-border-color);
  border-radius: 10px;
  padding: 20px 40px 20px;
`;

const ColorInfo = styled.div``;

const ColorModeText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary-color);
  margin: 5px 0;
`;

const ColorModeDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-secondary-color);
  margin: 5px 0;
`;
