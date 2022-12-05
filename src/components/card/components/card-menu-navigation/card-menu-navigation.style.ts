import Button from "components/styled/button/button";
import styled from "styled-components";
import { leftTickDesign, rightTickDesign, setDimensions } from "utils/mixins";

const MenuNavigation = styled.div`
  margin: 0 0 0 20px;
  width: 58px;

  @media (min-width: 1440px) {
    position: absolute;
    top: 697px;
    left: 80px;
    width: 120px
  }
`;

const MenuNavigationNumbers = styled.p`
  margin: 0 0 11px;

  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

const MenuNavigationButtonList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;

  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuNavigationButtonItem = styled.li`
  padding: 0;
`;

const ButtonNavigation = styled(Button)`
  ${setDimensions(25)};

  border-color:  ${({ theme }) => theme.color.blackBlue};

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;

    ${setDimensions(6, 2)};
    background-color: ${({ theme }) => theme.color.blackBlue};

    content: '';
  }

  &:disabled {
    border-color: ${({ theme }) => theme.color.blackBlueHEX};

    &::before,
    &::after {
      background-color: ${({ theme }) => theme.color.blackBlueHEX};
    }
  }

  @media (min-width: 1440px) {
    ${setDimensions(50)};


    &::before,
    &::after {
      ${setDimensions(12, 2)};

    }
  }
`;

const MenuNavigationPrevButton = styled(ButtonNavigation)`
  ${leftTickDesign};
`;

const MenuNavigationNextButton = styled(ButtonNavigation)`
  ${rightTickDesign};
`;

export {
  MenuNavigation,
  MenuNavigationNumbers,
  MenuNavigationButtonList,
  MenuNavigationPrevButton,
  MenuNavigationNextButton,
  MenuNavigationButtonItem,
}
