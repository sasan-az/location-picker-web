import styled from "styled-components";
import CoreButton from "core/components/Button";

export const Header = styled.span`
  font-size: 25px;
  font-weight: 500;
  width: 100%;
  text-align: center;
  color: white;
  padding: 20px 0;
  background: ${({ theme }) => theme.concepts.primary};
`;

export const Title = styled.span`
  font-size: 18px;
  margin-top: 30px;
`

export const Button = styled(CoreButton)`
  margin: 0 5px;
`;
