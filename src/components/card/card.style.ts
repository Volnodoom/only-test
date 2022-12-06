import styled from "styled-components";
import { setDimensions, setFontValues } from "utils/mixins";

const CardBox = styled.div`
  position: relative;
  padding: 59px 0 13px 0;
  margin: 0 auto;
  width: 320px;

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 220px 0 204px 0;

    overflow: hidden;

    border-left: ${({ theme }) => `1px solid ${theme.color.blackBlue10Opacity}`};
    border-right: ${({ theme }) => `1px solid ${theme.color.blackBlue10Opacity}`};
  }
`;

const CardTopic = styled.h1`
  padding: 0 20px;
  margin: 0 0 56px;

  ${({ theme }) => setFontValues(theme.font.medium, 24, 700)};

  @media (min-width: 1440px) {
    position: relative;

    padding: 0 0 0 80px;
    margin-bottom: 537px;
    max-width: 480px;
    height: 215px;

    overflow: hidden;
    text-overflow: ellipsis;

    ${({ theme }) => setFontValues(theme.font.semiHuge, 67)};

    &::before {
      position: absolute;
      top: 7px;
      left: 0;

      ${setDimensions(5, 120)};
      background-image: ${({ theme }) => `linear-gradient(
        ${theme.color.blue} 0,
        ${theme.color.fuchsia} 100%
      )`};

      content: '';
    }
  }
`;



const CardDecoration = styled.div`
  position: relative;
  margin-bottom: 10px;

  ${setDimensions('100%', 10)};

  & > * {
    display: none;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 20px;

    ${setDimensions(280, 1)};
    background-color: ${({ theme }) => theme.color.blackBlue};
    opacity: 0.1;
    content: '';
  }

  @media (min-width: 1440px) {
    position: absolute;
    top: 215px;
    left: 452px;
    z-index: 20;

    ${setDimensions(530)};

    &::after {
      top: 0;
      left: 0;

      ${setDimensions(530)};
      border: ${({ theme }) => `1px solid ${theme.color.blackBlue10Opacity}`};
      border-radius: 50%;

      background-color: transparent;
      opacity: 1;
    }

    & > * {
      display: initial;
    }
  }
`;

const CardDecorationCross = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  ${setDimensions('100%')};
  background-color: transparent;

  &::before {
    position: absolute;
    top: -100vh;
    left: 50%;

    ${setDimensions(1,'400vh')};
    background-color: ${({ theme }) => theme.color.blackBlue10Opacity};
    content: '';
  }

  &::after {
    position: absolute;
    top: 50%;
    left: -100vw;

    ${setDimensions('200vw', 1)};
    background-color: ${({ theme }) => theme.color.blackBlue10Opacity};
    content: '';
  }
`;


export {
  CardBox,
  CardTopic,
  CardDecoration,
  CardDecorationCross,
}
