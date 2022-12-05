import styled, { css } from "styled-components";
import { MenuDotType, MenuListType, MenuTitleType } from "types/style.type";
import { customAntiRotation, customRotation } from "utils/animation.style";
import { setDimensions, setFontValues } from "utils/mixins";

const Menu = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;

  @media (min-width: 1440px) {
    ${setDimensions(530)};
    top: 215px;
    left: 452px;
    bottom: auto;
    transform: translateX(0%);
    z-index: 20;
  }
`;

const MenuList = styled.ul<MenuListType>`
  all: revert;
  display: flex;
  gap: 10px;

  position: relative;
  z-index: 30;
  height: 6px;

  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1440px) {
    display: block;

    ${setDimensions(530)};

    animation-name: ${({ $startAngle, $endAngle }) => customRotation($startAngle, $endAngle)};
    animation-duration: ${({ $animationTime }) => `${$animationTime}s`};
    animation-fill-mode: forwards;
  }
`;

const MenuItem = styled.li`
  padding: 0;

  @media (min-width: 1440px) {
    position: absolute;
    top: 265px;
    left: 265px;
    z-index: 40;

    &.first-position {
      transform: rotate(300deg) translate(265px) rotate(-300deg);
    }

    &.second-position {
      transform: rotate(0deg) translate(265px);
    }

    &.third-position {
      transform: rotate(60deg) translate(265px) rotate(-60deg);
    }

    &.fourth-position {
      transform: rotate(120deg) translate(265px) rotate(-1200deg);
    }

    &.fifth-position {
      transform: rotate(180deg) translate(265px) rotate(-180deg);
    }

    &.sixth-position {
      transform: rotate(240deg) translate(265px) rotate(-240deg);
    }
  }
`;

const MenuDot = styled.label<MenuDotType>`
  position: relative;
  display: block;
  ${setDimensions(6)};

  background-color: ${({ theme }) => theme.color.blackBlue};
  border-radius: 50%;
  opacity: 0.4;

  ${({ $isChecked }) => $isChecked ? css`opacity: 1;` : ''}

  cursor: pointer;

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    content: '';
    ${setDimensions(16)};
  }

  @media (min-width: 1440px) {
    opacity: 1;
    z-index: 70;
    transform: translate(-50%, -50%);

    transition: width 0.3s, height 0.3s, background-color 0.3s;

    &::after {
      ${setDimensions(30)};
    }

    ${({ $isChecked }) => {
      if($isChecked) {
        return css<MenuDotType>`
          ${setDimensions(56)};

          background-color: ${({ theme }) => theme.color.cloudyWhite};
          border: ${({ theme }) => `1px solid ${theme.color.blackBlueHEX}`};

          color: ${({ theme }) => theme.color.blackBlue};
          ${({ theme }) => setFontValues(theme.font.medium, 30) };

          &::before {
            position: absolute;
            top: 50%;
            left: 50%;

            content: ${({ $contentValue }) => `"${$contentValue}"` };

            animation-name: ${({ $startAngle, $endAngle }) => customAntiRotation($startAngle, $endAngle)};
            animation-duration: ${({ $animationTime }) => `${$animationTime}s`};
            animation-fill-mode: forwards;
          }

        `;
      }
    }}

    &:hover {
      ${({ $isChecked }) => {
        if($isChecked) {
          return
        }

        return css<MenuDotType>`
          ${setDimensions(56)};

          background-color: ${({ theme }) => theme.color.cloudyWhite};
          border: ${({ theme }) => `1px solid ${theme.color.blackBlueHEX}`};

          color: ${({ theme }) => theme.color.blackBlue};
          ${({ theme }) => setFontValues(theme.font.medium, 30) };

          transition: content 0.3s;

          &::before {
            position: absolute;
            top: 50%;
            left: 50%;

            content: ${({ $contentValue }) => `"${$contentValue}"` };

            transform: translate(-50%, -50%) rotate(${({ $endAngle, $currentAngle }) => $currentAngle ? -$currentAngle : -$endAngle}deg);
          }
        `;
      }}
    }
  }
`;


// add $isChecked to element to show button title
const MenuItemTitle = styled.h3<MenuTitleType>`
  display: none;

  @media (min-width: 1440px) {
    ${({ $isChecked }) => {
    if($isChecked) {
      return css<MenuTitleType>`
        display: block;
        margin: 0;
        position: absolute;
        top: -14px;
        left: 47px;

        min-width: 100px;
        ${({ theme }) => setFontValues(theme.font.medium, 30, 700)};
        white-space: nowrap;
      `;
      }
    }}
  }
`;


const MenuInput = styled.input``;

export {
  Menu,
  MenuList,
  MenuItem,
  MenuItemTitle,
  MenuDot,
  MenuInput,
}
