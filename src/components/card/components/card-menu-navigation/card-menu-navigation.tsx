import { ONE, ZERO } from "utils/const";
import { checkTheNumberValue } from "utils/utils";
import { MockData } from "utils/mock-data";
import * as S from "./card-menu-navigation.style";
import { RefObjectType } from "types/style.type";

type CardMenuNavigationType = {
  activeMenuSection: number,
  setMenuSection: React.Dispatch<React.SetStateAction<number>>,
  refWithRotationMethods: React.MutableRefObject<RefObjectType | null>,
}

const CardMenuNavigation = ({activeMenuSection, setMenuSection, refWithRotationMethods}: CardMenuNavigationType) => {
  const currentMenuPage = activeMenuSection + ONE;
  const totalMenuPagesNumber = MockData.length;

  const handlePrevClick = () => {
    if(activeMenuSection === ZERO) {
      return;
    }

    const value = activeMenuSection - ONE;
    // setMenuSection(value);
    refWithRotationMethods.current && refWithRotationMethods.current.rotateCircleBack();
  };

  const handleNextClick = () => {
    if(activeMenuSection === totalMenuPagesNumber - ONE) {
      return;
    }

    const value = activeMenuSection + ONE;
    // setMenuSection(value);
    refWithRotationMethods.current && refWithRotationMethods.current.rotateCircleForward();
  };

  return(
    <S.MenuNavigation>
      <S.MenuNavigationNumbers>
        <span>{checkTheNumberValue(currentMenuPage)}</span>
        /
        <span>{checkTheNumberValue(totalMenuPagesNumber)}</span>
      </S.MenuNavigationNumbers>
      <S.MenuNavigationButtonList>
        <S.MenuNavigationButtonItem>
          <S.MenuNavigationPrevButton
            aria-label="Предыдущий"
            type="button"
            disabled={currentMenuPage === ONE}
            onClick={handlePrevClick}
          />
        </S.MenuNavigationButtonItem>

        <S.MenuNavigationButtonItem>
          <S.MenuNavigationNextButton
            aria-label="Следующий"
            type="button"
            disabled={totalMenuPagesNumber === ONE || currentMenuPage === totalMenuPagesNumber}
            onClick={handleNextClick}
          />
        </S.MenuNavigationButtonItem>
      </S.MenuNavigationButtonList>
    </S.MenuNavigation>
  )
}

export default CardMenuNavigation;
