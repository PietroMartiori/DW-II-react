import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #9ca3af;
  }
`;

export default function Botao({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}