import styled from "styled-components";
import CoreButton from "core/components/Button";

export const Header = styled.span`
  color: #90c66f;
  font-size: 15px;
  font-weight: bold;
`;

export const Name = styled.span`
  color: #2e2e2e;
  font-size: 13.5px;
  margin-top: 10px;
  font-weight: 500;
`;

export const Type = styled.span`
  color: #6f6f6f;
  font-size: 10px;
`;

export const Button = styled(CoreButton)`
  margin: 10px 0;
  font-size: 12px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
