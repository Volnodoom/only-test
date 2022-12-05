import styled from "styled-components";
import { setFontValues } from "utils/mixins";

// to adjust padding for the SWIPER element (.custom-swiper-property) when it has slider
// on left -- add class  .custom-swiper-property--left-slider
// on right -- add class  .custom-swiper-property--right-slider

const CardSwiperTitle = styled.h3`
  margin: 0 0 15px;

  color: ${({ theme }) => theme.color.blue};
  font-weight: 400;

  @media (min-width: 1440px) {
    ${({ theme }) => setFontValues(theme.font.overMedium, 30)};
  }
`;

const CardSwiperText = styled.p`
  margin: 0;

  @media (min-width: 1440px) {
    ${({ theme }) => setFontValues(theme.font.medium, 30)};
  }
`;

export {
  CardSwiperTitle,
  CardSwiperText,
}
