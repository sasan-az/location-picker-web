import { ReactElement, SelectHTMLAttributes } from "react";
import * as Styled from "./styles";
import {
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from "styled-system";

export type SelectProp = SelectHTMLAttributes<HTMLSelectElement> &
  SpaceProps &
  FlexboxProps &
  ColorProps &
  LayoutProps & {
    items: { title: string; value: string }[];
  };

const Select = (prop: SelectProp): ReactElement => {
  const { items, ...rest } = prop;
  return (
    <Styled.Select {...rest}>
      {items.map(({ value, title }) => (
        <option key={value} value={value}>
          {title}
        </option>
      ))}
    </Styled.Select>
  );
};

export default Select;
