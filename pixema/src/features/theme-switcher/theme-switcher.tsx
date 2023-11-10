import styled from 'styled-components';
import activeIco from './img/activeIco.svg';
import offIco from './img/offIco.svg';
import { useEffect, useState } from 'react';

export const ThemeSwitcher: React.FC = () => {
  const isDarkClassExist = document
    .querySelector('.App')
    ?.classList.contains('dark');

  const [isDark, setIsDark] = useState(!isDarkClassExist);

  useEffect(() => {
    document.querySelector('.App')?.classList.toggle('dark');
  }, [isDark]);

  return (
    <ThemeSwitcherWrapper>
      <div onClick={() => setIsDark(true)}>
        <img src={isDark ? activeIco : offIco} alt="dark mode" />
      </div>
      <div onClick={() => setIsDark(false)}>
        <img src={isDark ? offIco : activeIco} alt="light mode" />
      </div>
    </ThemeSwitcherWrapper>
  );
};

const ThemeSwitcherWrapper = styled.div``;
