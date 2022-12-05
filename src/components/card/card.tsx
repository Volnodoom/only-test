import { useRef, useState } from 'react';
import { CombinedHTMLSwiper, RefObjectType } from 'types/style.type';
import { ONE, SLIDER_LIMIT, ZERO } from 'utils/const';
import { MockData } from 'utils/mock-data';
import * as S from './card.style';
import { CardMenu, CardMenuNavigation, CardSwiper } from './components/components';

const Card = () => {
  const swiperElement = useRef<CombinedHTMLSwiper | null>(null);
  const cardMenuRef = useRef<RefObjectType | null>(null);
  const [currentMenuSection, setCurrentMenuSection] = useState(ZERO);
  const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(false);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(true);

  const sortAscending = MockData[currentMenuSection]
    .scope
    .slice()
    .sort((valueA, valueB) => valueA.year - valueB.year);

  const startDate = sortAscending[0].year;
  const endDate = sortAscending.at(-ONE)?.year;

  const numberOfSlides = MockData[currentMenuSection].scope.length;

  if(numberOfSlides <= SLIDER_LIMIT) {
    setIsPrevButtonVisible(false);
    setIsNextButtonVisible(false);
  }

  const handleNavigationPrevClick = () => {
    swiperElement.current && swiperElement.current.swiper.slidePrev();

    if(swiperElement.current && (swiperElement.current.swiper.activeIndex === 0)) {
      setIsPrevButtonVisible(false);
    }

    if(
        numberOfSlides > SLIDER_LIMIT
        &&
        swiperElement.current
        &&
        swiperElement.current.swiper.activeIndex < (numberOfSlides - SLIDER_LIMIT)
      ) {
      setIsNextButtonVisible(true);
    }
  }

  const handleNavigationNextClick = () => {
    swiperElement.current && swiperElement.current.swiper.slideNext();

    if(swiperElement.current && (swiperElement.current.swiper.activeIndex > 0)) {
      setIsPrevButtonVisible(true);
    }

    if(
        swiperElement.current
        && swiperElement.current.swiper.activeIndex === (numberOfSlides - SLIDER_LIMIT)
      ) {
      setIsNextButtonVisible(false);
    }
  }

  return (
    <S.CardBox>
      <S.CardTopic>Исторические<br/>даты</S.CardTopic>
      <S.CardRange>
        <S.CardRangeStart>{startDate}</S.CardRangeStart>
        &nbsp;<S.CardRangeGap>&nbsp;</S.CardRangeGap>
        <S.CardRangeEnd>{endDate}</S.CardRangeEnd>
      </S.CardRange>

      <S.CardDecoration>
        <p className="visually-hidden">Сменить исторический период</p>
        <S.CardDecorationCross />
      </S.CardDecoration>

      <CardSwiper
        activeMenuSection={currentMenuSection}
        swiperRef={swiperElement}
        hasLeftSwiper={isPrevButtonVisible}
        hasRightSwiper={isNextButtonVisible}
      />

      <CardMenuNavigation
        activeMenuSection={currentMenuSection}
        setMenuSection={setCurrentMenuSection}
        refWithRotationMethods={cardMenuRef}
      />
      <CardMenu
        ref={cardMenuRef}
        activeMenuSection={currentMenuSection}
        setMenuSection={setCurrentMenuSection}

      />

      <S.CardSliderSwiper>
        {
          isPrevButtonVisible ? <S.CardSliderSwiperLeftButton onClick={handleNavigationPrevClick}/> : <p></p>
        }

        {
          isNextButtonVisible ? <S.CardSliderSwiperRightButton onClick={handleNavigationNextClick}/> : <p></p>
        }
      </S.CardSliderSwiper>

    </S.CardBox>
  )
}

export default Card;
