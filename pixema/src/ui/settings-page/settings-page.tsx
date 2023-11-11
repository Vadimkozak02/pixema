import styled from 'styled-components';
import { MainTemplate } from '../templates/main-template/main-template';
import { HeaderTemplate } from '../templates/header-template/header-template';
import { Input } from '../input/input';
import { ThemeSwitcher } from '../../features/theme-switcher/theme-switcher';

export const SettingsPage: React.FC = () => {
  return (
    <SettingsWrapper>
      <MainTemplate />
      <SettingsContentWrapper>
        <HeaderTemplate />
        <SettingsBlocks>
          <ProfileWrapper>
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
          </ColorModeWrapper>
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
