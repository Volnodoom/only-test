import styled from "styled-components";

const CardSwiper = styled.div`
width: 100%;
`;


const CardSwiperTitle = styled.h3`
  margin: 0 0 15px;

  color: ${({ theme }) => theme.color.blue};
  font-weight: 400;
`;

const CardSwiperText = styled.p`
  margin: 0;
`;

export {
  CardSwiper,
  CardSwiperTitle,
  CardSwiperText,
}
