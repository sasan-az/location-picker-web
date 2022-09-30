import React, { HTMLAttributes, ReactNode } from "react";
import {
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from "styled-system";
import { Container as StyledContainer } from "./styles";

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
  SpaceProps &
  FlexboxProps &
  ColorProps &
  LayoutProps & {
    children?: ReactNode;
  };

const Container = (props: ContainerProps): JSX.Element => {
  const { children, ...rest } = props;

  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default Container;
