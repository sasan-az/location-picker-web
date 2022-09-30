import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px 20px;
  border-radius: 5px;
  color: white;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  background: ${({ theme }) => theme.concepts.primary};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.5);
  }
`;
