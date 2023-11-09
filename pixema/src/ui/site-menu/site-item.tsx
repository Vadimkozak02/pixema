import styled from 'styled-components';

type SiteItem = {
  title: string;
  image: React.ReactNode;
  active: boolean;
  setActive: () => void;
};

export const SiteItem: React.FC<SiteItem> = ({
  title,
  image,
  active,
  setActive,
}) => {
  return (
    <>
      <TabsBtn type="button" onClick={() => setActive()} $active={active}>
        {image} {title}
      </TabsBtn>
    </>
  );
};

const TabsBtn = styled.button<{ $active: boolean }>`
  border: none;
  background-color: transparent;
  color: var(--text-secondary-color);
  font-size: 18px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    color: var(--text-active-color);
  }
`;
