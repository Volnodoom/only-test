import Button from "components/styled/button/button";
import styled from "styled-components";
import { leftTickDesign, rightTickDesign, setDimensions, setFontValues } from "utils/mixins";

const CardBox = styled.div`
  position: relative;
  padding: 59px 0 13px 0;
  margin: 0 auto;
  width: 320px;

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 170px 0 204px 0;

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

const CardSliderSwiper = styled.div`
  display: none;
  z-index: 70;

  & > * {
    display: none;
  }

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 1360px;
    position: absolute;
    top: 882px;
    left: 40px;

    & > * {
      display: initial;
    }
  }
`;

const CardSliderSwiperButton = styled(Button)`
  position: relative;

  ${setDimensions(40)};
  border: 0;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;

    ${setDimensions(10, 2)};
    background-color: ${({ theme }) => theme.color.blue};

    content: '';
  }
`;

const CardSliderSwiperLeftButton = styled(CardSliderSwiperButton)`
  ${leftTickDesign};
`;

const CardSliderSwiperRightButton = styled(CardSliderSwiperButton)`
  justify-self: end;
  ${rightTickDesign};
`;

export {
  CardBox,
  CardTopic,
  CardDecoration,
  CardDecorationCross,
  CardSliderSwiper,
  CardSliderSwiperLeftButton,
  CardSliderSwiperRightButton,
}
