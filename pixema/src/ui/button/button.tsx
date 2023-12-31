import styled from 'styled-components';

type Props = {
  children: string;
  disabled?: boolean;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ children, disabled, onClick }) => {
  return (
    <ButtonWrapper type="button" disabled={disabled} onClick={() => onClick()}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  width: 410px;
  height: 56px;
  text-align: center;
  color: var(--button-text-color);
  background-color: var(--button-bg-primary-color);
  border-radius: 10px;
  transition: 0.3s;

  &:disabled {
    cursor: auto;
    opacity: 0.67;
    color: var(--input-background-color);
    background-color: var(--button-colorMode-off);

    &:hover {
      background-color: var(--button-colorMode-off);
    }
  }

  &:hover {
    background-color: var(--text-hover-color);
  }
`;
