import { keyframes } from "styled-components";

export const customRotation = (startAngle: number, endAngle: number) => keyframes`
  0% {
    transform: rotate(${startAngle}deg);

  }
  100% {
    transform: rotate(${endAngle}deg);

  }
`;

export const customAntiRotation = (startAngle: number, endAngle: number) => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(${-startAngle}deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(${-endAngle}deg);
  }
`;

