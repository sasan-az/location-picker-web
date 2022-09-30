import { ButtonHTMLAttributes, ReactElement, useCallback } from "react";
import * as Styled from "./styles";
import { useRouter } from "next/router";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  link?: string;
};

const Button = (prop: ButtonProps): ReactElement => {
  const { onClick, link, ...rest } = prop;

  const { push } = useRouter();

  const handleClick = useCallback(
    (event) => {
      if (link) {
        push(link).then((r) => {});
      } else {
        onClick?.(event);
      }
    },
    [push]
  );

  return <Styled.Button onClick={handleClick} {...rest} />;
};

export default Button;
