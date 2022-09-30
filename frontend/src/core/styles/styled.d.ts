import "styled-components";
import { Concept } from "./concepts";

declare module "styled-components" {
  export interface DefaultTheme {
    concepts: Concept;
  }
}
