import { ONE, ZERO } from "utils/const";
import { checkTheNumberValue } from "utils/utils";
import { MockData } from "utils/mock-data";
import * as S from "./card-menu-navigation.style";
import { RefObjectType } from "types/style.type";
import { useSelector } from "react-redux";
import { getActiveIndex } from "store/selectors";

type CardMenuNavigationType = {
  refWithRotationMethods: React.MutableRefObject<RefObjectType | null>,
}

const CardMenuNavigation = ({refWithRotationMethods}: CardMenuNavigationType) => {
  const activeIndex = useSelector(getActiveIndex);
  const currentMenuPage = activeIndex + ONE;
  const totalMenuPagesNumber = MockData.length;

  const handlePrevClick = () => {
    if(activeIndex === ZERO) {
      return;
    }

    refWithRotationMethods.current && refWithRotationMethods.current.rotateCircleBack();
  };

  const handleNextClick = () => {
    if(activeIndex === totalMenuPagesNumber - ONE) {
      return;
    }

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
