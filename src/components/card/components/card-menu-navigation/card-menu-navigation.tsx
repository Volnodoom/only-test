import { useState } from "react";
import { ONE } from "utils/const";
import { checkTheNumberValue } from "utils/utils";
import { MockData } from "utils/mock-data";
import * as S from "./card-menu-navigation.style";

type CardMenuNavigationType = {
  activeIndexNumber: number,
}

const CardMenuNavigation = ({activeIndexNumber}: CardMenuNavigationType) => {
  const [currentMenuPage, setCurrentMenuPage] = useState(ONE);

  const totalMenuPagesNumber = MockData[activeIndexNumber].scope.length;

  const handlePrevClick = () => {}
  const handleNextClick = () => {}

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
