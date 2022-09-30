import { InputHTMLAttributes, ReactElement } from "react";
import * as Styled from "./styles";
import Container, { ContainerProps } from "core/components/Container";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  container?: ContainerProps;
};

const Input = (prop: InputProps): ReactElement => {
  const { error, container, ...rest } = prop;
  return (
    <Container flexDirection={"column"} {...container}>
      <Styled.Input  {...rest} />
      {error && <Styled.Error>{error}</Styled.Error>}
    </Container>
  );
};

export default Input;
