import Button from "components/styled/button/button";
import styled from "styled-components";
import { leftTickDesign, rightTickDesign, setDimensions } from "utils/mixins";

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
  CardSliderSwiper,
  CardSliderSwiperLeftButton,
  CardSliderSwiperRightButton,
}
