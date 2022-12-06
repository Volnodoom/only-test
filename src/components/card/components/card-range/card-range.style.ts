import styled from "styled-components";
import { setFontValues } from "utils/mixins";

const CardRange = styled.h2`
  position: inherit;
  min-height: 73px;
  padding: 0;
  margin: 0 20px 58px;
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
  position: absolute;
  top: 0;
  left: 0;

  color: ${({ theme }) => theme.color.blue};
`;

const CardRangeEnd = styled.span`
  position: absolute;
  top: 0;
  right: 0;

  color: ${({ theme }) => theme.color.fuchsia};
`;

export {
  CardRange,
  CardRangeStart,
  CardRangeEnd,
}
