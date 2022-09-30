import dynamic from "next/dynamic";
import styled from "styled-components";
import CoreButton from "core/components/Button";

const CoreMap = dynamic(() => import("core/components/Map"), { ssr: false });

export const Map = styled(CoreMap)`
  height: 70%;
  width: 70%;
`;

export const Button = styled(CoreButton)`
  position: absolute;
  bottom: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
