import styled from "styled-components";
import Container from "core/components/Container";
import CoreButton from "core/components/Button";

export const FormContainer = styled(Container)`
  flex: 1;
  flex-direction: column;
  width: 50%;
  margin-top: 20px;
  border: solid 2px #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

export const Label = styled.span`
  flex: 1;
  font-weight: 600;
`;

export const RowContainer = styled(Container)`
  align-items: center;
  margin: 5px 0;
`;

export const Header = styled(Container)`
  height: 50px;
  align-items: center;
  padding: 0 20px;
  font-size: 17px;
  color: white;
  background: ${({ theme }) => theme.concepts.primary};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Button = styled(CoreButton)`
  margin-block: 20px;
`;
