import { css, FlattenSimpleInterpolation } from "styled-components";
import { TypeOfData } from "./const";

export const setDimensions = (width: number | string, height?: number | string) => {
  if(height) {
    return {
      width,
      height,
    }
  }

  return {
    width: width,
    height: width,
  }
};

export const setFontValues = (size: number | string, height: number | string, weight?: number) => {
  let withWeight: FlattenSimpleInterpolation | undefined;

  if(typeof size === TypeOfData.STRING) {
    withWeight = css `
      font-size: ${size};
      font-weight: ${weight};
      line-height: ${height}px;
    `;
  }

  if(typeof height === TypeOfData.STRING) {
    withWeight = css `
    font-size: ${size}px;
    font-weight: ${weight};
    line-height: ${height};
  `;
  }

  if(typeof size === TypeOfData.STRING && typeof height === TypeOfData.STRING) {
    withWeight = css `
      font-size: ${size};
      font-weight: ${weight};
      line-height: ${height};
    `;
  }

  if (weight) {
    return withWeight;
  }

  return {
    'font-size': size,
    'line-height': height,
  }
};

export const specificBorder = css`
  ${({ theme }) => `1px solid ${theme.color.lightOutlineTwo}`};
`;

export const leftTickDesign = css`
  &::before {
    transform: translate(-50%,-50%) rotate(45deg);
    transform-origin: top left;
  }

  &::after {
    top: calc(50% + 1px);

    transform: translate(-50%,-50%) rotate(-45deg);
    transform-origin: bottom left;
  }
`;

export const rightTickDesign = css`
  &::before {
    top: calc(50% + 1px);

    transform: translate(-50%,-50%) rotate(45deg);
    transform-origin: top right;
  }

  &::after {
    top: calc(50% - 1px);

    transform: translate(-50%,-50%) rotate(-45deg);
    transform-origin: bottom right;
  }
`;
