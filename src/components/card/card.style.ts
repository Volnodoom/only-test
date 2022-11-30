import styled from "styled-components";
import { setDimensions, setFontValues } from "utils/mixins";

const CardBox = styled.div`
  position: relative;
  padding: 59px 0 13px 0;
`;

const CardTopic = styled.h1`
  padding: 0 20px;
  margin: 0 0 56px;

  ${({ theme }) => setFontValues(theme.font.medium, 24, 700)};
`;

const CardRange = styled.h2`
  padding: 0 20px;
  margin: 0 0 58px;
  ${({ theme }) => setFontValues(theme.font.semiHuge, 72, 700)};
`;

const CardRangeStart = styled.span`
  color: ${({ theme }) => theme.color.blue};
`;

const CardRangeEnd = styled.span`
  color: ${({ theme }) => theme.color.fuchsia};
`;

const CardDecoration = styled.div`
  position: relative;
  margin-bottom: 10px;

  ${setDimensions('100%', 10)};

  &::after {
    position: absolute;
    top: 0;
    left: 20px;

    ${setDimensions(280, 1)};
    background-color: ${({ theme }) => theme.color.blackBlue};
    opacity: 0.1;
    content: '';
  }
`;

const CardNavigation = styled.div`
  margin: 0 0 0 20px;
  width: 58px;
`;

const CardNavigationNumbers = styled.p`
  margin: 0 0 11px;
`;

const CardNavigationButtonList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;

  list-style: none;
  margin: 0;
  padding: 0;
`;

const CardNavigationButtonItem = styled.li`
  padding: 0;
`;

const Button = styled.button`
  display: block;
  position: relative;

  ${setDimensions(25)};
  padding: 0;

  background-color: transparent;
  border: ${({ theme }) => `1px solid ${theme.color.blackBlueHEX}`};
  border-radius: 50%;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  outline: none;
  text-decoration: none;

  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;

    ${setDimensions(6, 2)};
    background-color: ${({ theme }) => theme.color.blackBlue};

    content: '';
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.white};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const CardNavigationPrevButton = styled(Button)`
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

const CardNavigationNextButton = styled(Button)`
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

const CardPagination = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
`;

const CardPaginationDot = styled.label`
  position: relative;
  ${setDimensions(6)};

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  background-color: ${({ theme }) => theme.color.blackBlue};
  border-radius: 50%;
  opacity: 0.4;

  cursor: pointer;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    content: '';
    ${setDimensions(16)};
  }
`;

const CardPaginationInput = styled.input`
  &:checked {
    & + ${CardPaginationDot} {
      opacity: 1;
    }
  }
`;

export {
  CardBox,
  CardTopic,
  CardRange,
  CardRangeStart,
  CardRangeEnd,
  CardDecoration,
  CardNavigation,
  CardNavigationNumbers,
  CardNavigationButtonList,
  CardNavigationButtonItem,
  CardNavigationPrevButton,
  CardNavigationNextButton,
  CardPagination,
  CardPaginationDot,
  CardPaginationInput,
}
