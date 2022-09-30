import { ReactElement } from "react";
import dynamic from "next/dynamic";
import * as Styled from "./styles";

const LocationsMap = dynamic(
  () => import("features/dashboard/components/LocationsMap"),
  { ssr: false }
);

const Home = (): ReactElement => {
  return (
    <Styled.Container>
      <LocationsMap />
    </Styled.Container>
  );
};

export default Home;
