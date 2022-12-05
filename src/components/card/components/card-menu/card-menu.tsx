import { ChangeEvent, forwardRef, Ref, useEffect, useImperativeHandle, useState } from "react";
import { RefObjectType } from "types/style.type";
import { COUNTER_CLOCK_POSITIVE_ROTATION_LIMIT, ANIMATION_TIME, MenuSectionClassNames, MENU_LIMIT, ONE, PositionValues, SIXTY_DEGREE, COUNTER_CLOCK_NEGATIVE_ROTATION_LIMIT } from "utils/const";
import { MockData } from "utils/mock-data";
import { reversePositionValue } from "utils/utils";
import * as S from "./card-menu.style";

type CardMenuType = {
  activeMenuSection: number,
  setMenuSection: React.Dispatch<React.SetStateAction<number>>,
}

const CardMenu = forwardRef(({activeMenuSection, setMenuSection}: CardMenuType, ref: Ref<RefObjectType>) => {
  const [rotationStart, setRotationStart] = useState(0);
  const [rotationEnd, setRotationEnd] = useState(0);
  const [timeAnimation, setTimeAnimation] = useState(0);
  const [prevActiveMenuNumber, setPrevActiveMenuNumber] = useState(1);
  const [isMenuTitleVisible, setIsMenuTitleVisible] = useState(true);
  const menuElementsNumber = MockData.length;
  let activeMenuNumber = activeMenuSection + ONE;

  useEffect(() => {
    const handleAnimationEnd = () => {
      setIsMenuTitleVisible(true);
    }

    document.addEventListener('animationend', handleAnimationEnd);

    return () => document.removeEventListener('animationend', handleAnimationEnd);
  })

  useImperativeHandle(ref, () => ({
    rotateCircleBack: () => {
      setRotationStart(rotationEnd);
      setRotationEnd(prevValue => prevValue + SIXTY_DEGREE);
      setTimeAnimation(ANIMATION_TIME);
      setPrevActiveMenuNumber(prevValue => --prevValue);
      setMenuSection(prevValue => --prevValue);

    },
    rotateCircleForward: () => {
      setRotationStart(rotationEnd);
      setRotationEnd(prevValue => prevValue - SIXTY_DEGREE);
      setTimeAnimation(ANIMATION_TIME);
      setPrevActiveMenuNumber(prevValue => ++prevValue);
      setMenuSection(prevValue => ++prevValue);
    }
  }))

  const handleMenuChange = (evt: ChangeEvent) => {
    const elementNumber = (evt.target as HTMLInputElement).value;
    const indexNumber = Number(elementNumber) - ONE;
    const prevIndexNumber = prevActiveMenuNumber - ONE;

    setMenuSection(indexNumber);
    setIsMenuTitleVisible(false);

    activeMenuNumber = Number(elementNumber);
    const positiveDifference = activeMenuNumber - prevActiveMenuNumber;
    const negativeDifference = prevActiveMenuNumber - activeMenuNumber;
    const isPositiveDifference =  positiveDifference > 0;
    const isNegativeDifference =  negativeDifference > 0;
    const isInitialPoint = rotationStart === 0 && rotationEnd === 0 && timeAnimation === 0;

    if(isInitialPoint) {
      if(activeMenuNumber === PositionValues.two || activeMenuNumber === PositionValues.three) {
        setRotationEnd(-indexNumber*SIXTY_DEGREE);
        setTimeAnimation(indexNumber*ANIMATION_TIME);
        setPrevActiveMenuNumber(activeMenuNumber);
      } else {
        setRotationEnd(
          reversePositionValue(activeMenuNumber)*SIXTY_DEGREE
          );

        setTimeAnimation(
          reversePositionValue(activeMenuNumber)*ANIMATION_TIME
        );

        setPrevActiveMenuNumber(activeMenuNumber);
      }
    } else {
      if(isPositiveDifference && positiveDifference <= COUNTER_CLOCK_POSITIVE_ROTATION_LIMIT) {
        setRotationStart(rotationEnd);
        setRotationEnd(previousRotationEnd => previousRotationEnd - positiveDifference*SIXTY_DEGREE);
        setTimeAnimation(positiveDifference*ANIMATION_TIME);

        setPrevActiveMenuNumber(activeMenuNumber);
        return;
      } else if(isPositiveDifference && positiveDifference > COUNTER_CLOCK_POSITIVE_ROTATION_LIMIT) {
        setRotationStart(rotationEnd);

        const reverseValue = reversePositionValue(activeMenuNumber);

        setRotationEnd(previousRotationEnd => previousRotationEnd + (reverseValue + prevIndexNumber)*SIXTY_DEGREE);
        setTimeAnimation(reverseValue*ANIMATION_TIME);

        setPrevActiveMenuNumber(activeMenuNumber);
        return;
      }
      else if(isNegativeDifference && negativeDifference <= COUNTER_CLOCK_NEGATIVE_ROTATION_LIMIT) {
        setRotationStart(rotationEnd);
        setRotationEnd(previousRotationEnd => previousRotationEnd + negativeDifference*SIXTY_DEGREE);
        setTimeAnimation((prevActiveMenuNumber - activeMenuNumber)*ANIMATION_TIME);

        setPrevActiveMenuNumber(activeMenuNumber);
        return;
      }
      else if(isNegativeDifference) {
        setRotationStart(rotationEnd);

        const reverseValue = reversePositionValue(prevActiveMenuNumber);

        setRotationEnd(previousRotationEnd => previousRotationEnd - (reverseValue + indexNumber)*SIXTY_DEGREE);
        setTimeAnimation(activeMenuNumber*ANIMATION_TIME);

        setPrevActiveMenuNumber(activeMenuNumber);
        return;
      }
    }
  }

  if(menuElementsNumber <= 0) {
    return <S.Menu></S.Menu>
  }

  return (
    <S.Menu>
    <S.MenuList $startAngle={rotationStart} $endAngle={rotationEnd} $animationTime={timeAnimation}>
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
              $startAngle={rotationStart}
              $endAngle={rotationEnd}
              $animationTime={timeAnimation}
              htmlFor={`uniq-input-id${number}`}
              aria-label={`Дата №${number}`}
            />
          </S.MenuItem>
        ))
      }
    </S.MenuList>
    <S.MenuItemTitle $isChecked={isMenuTitleVisible}>{MockData[activeMenuSection].field}</S.MenuItemTitle>
  </S.Menu>
  )
})

export default CardMenu;
