import styled from 'styled-components';
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
    <ThemeSwitcherWrapper
      onClick={() => setIsDark(!isDark)}
      style={{
        backgroundColor: isDark
          ? 'var(--button-colorMode-active)'
          : 'var(--button-colorMode-off)',
      }}
    >
      <div style={{ transform: isDark ? 'translateX(15px)' : '' }}></div>
    </ThemeSwitcherWrapper>
  );
};

const ThemeSwitcherWrapper = styled.div`
  width: 32px;
  height: 17px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;

  div {
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--circle-colorMode-color);
    transition: 0.3s;
  }
`;
