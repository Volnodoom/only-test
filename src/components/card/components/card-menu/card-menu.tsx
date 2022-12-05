import { ChangeEvent, useState } from "react";
import { MenuSectionClassNames, MENU_LIMIT, ONE } from "utils/const";
import { MockData } from "utils/mock-data";
import * as S from "./card-menu.style";

type CardMenuType = {
  activeIndexNumber: number,
}

const CardMenu = ({activeIndexNumber}: CardMenuType) => {
  const menuElementsNumber = MockData.length;
  const [activeMenuNumber, setActiveMenuNumber] = useState(ONE);

  const handleMenuChange = (evt: ChangeEvent) => {
    const elementNumber = (evt.target as HTMLInputElement).value;
    setActiveMenuNumber(Number(elementNumber));
  }

  if(menuElementsNumber <= 0) {
    return <S.Menu></S.Menu>
  }

  return (
    <S.Menu>
    <S.MenuList $startAngle={0} $endAngle={0} $animationTime={10}>
    {
      Array
        .from({length: menuElementsNumber}, (value, index) => ++index)
        .slice(0, MENU_LIMIT)
        .map((number, currentIndex) => (
          <S.MenuItem className={MenuSectionClassNames[currentIndex]} key={`const-${number}`}>
            <S.MenuInput
              className="visually-hidden"
              id={`uniq-input-id${number}`}
              type="radio"
              value={number}
              name="Menu"
              checked={number === activeMenuNumber}
              onChange={handleMenuChange}
            />
            <S.MenuDot
              $isChecked={number === activeMenuNumber}
              $contentValue={number}
              $startAngle={0}
              $endAngle={0}
              $animationTime={0}
              htmlFor={`uniq-input-id${number}`}
              aria-label={`Дата №${number}`}
            />
            {/* is active for menuItemTitle we need to add acording to the animation event when it is finished */}
            <S.MenuItemTitle $isChecked={number === activeMenuNumber}>{MockData[activeIndexNumber].field}</S.MenuItemTitle>
          </S.MenuItem>
        ))
    }
    </S.MenuList>
  </S.Menu>
  )
}

export default CardMenu;
