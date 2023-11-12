import styled from 'styled-components';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
};

export const Input: React.FC<Props> = ({ labelText, ...restProps }) => {
  return (
    <Label>
      <LabelText>{labelText}</LabelText>
      <InputWrapper {...restProps} />
    </Label>
  );
};

const Label = styled.label`
  display: block;
  width: fit-content;
  color: var(--text-primary-color);
`;

const LabelText = styled.div`
  font-weight: 600;
  text-align: start;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

const InputWrapper = styled.input`
  all: unset;
  border: 1px solid transparent;
  border-radius: 10px;
  width: 380px;
  line-height: 56px;
  background-color: var(--input-background-color);
  border: 2px solid var(--input-border-color);
  padding: 5px 15px;
  margin-bottom: 24px;

  &::placeholder {
    color: var(--text-secondary-color);
  }
`;
