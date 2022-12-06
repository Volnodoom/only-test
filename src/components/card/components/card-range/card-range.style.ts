import styled from "styled-components";
import { setFontValues } from "utils/mixins";

const CardRange = styled.h2`
  padding: 0 20px;
  margin: 0 0 58px;
  ${({ theme }) => setFontValues(theme.font.semiHuge, 72, 700)};

  @media (min-width: 1440px) {
    position: absolute;
    top: 400px;
    left: 217px;
    z-index: 10;

    padding: 0;
    margin: 0;
    width: 1006px;

    ${({ theme }) => setFontValues(theme.font.huge, 160)};
  }
`;

const CardRangeStart = styled.span`
  color: ${({ theme }) => theme.color.blue};
`;

const CardRangeEnd = styled.span`
  color: ${({ theme }) => theme.color.fuchsia};
`;

const CardRangeGap = styled.span`
  display: none;

  @media (min-width: 1440px) {
    display: inline;
  }
`;

export {
  CardRange,
  CardRangeStart,
  CardRangeEnd,
  CardRangeGap,
}
