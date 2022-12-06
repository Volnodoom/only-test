import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getActiveIndex } from 'store/selectors';
import { CombinedHTMLSwiper, RefObjectType } from 'types/style.type';
import { SLIDER_LIMIT } from 'utils/const';
import { MockData } from 'utils/mock-data';
import * as S from './card.style';
import { CardMenu, CardMenuNavigation, CardRange, CardSwiper } from './components/components';

const Card = () => {
  const activeIndex = useSelector(getActiveIndex);
  const swiperElement = useRef<CombinedHTMLSwiper | null>(null);
  const cardMenuRef = useRef<RefObjectType | null>(null);
  const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(false);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(true);

  const numberOfSlides = MockData[activeIndex].scope.length;

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
      <CardRange />

      <S.CardDecoration>
        <p className="visually-hidden">Сменить исторический период</p>
        <S.CardDecorationCross />
      </S.CardDecoration>

      <CardSwiper
        swiperRef={swiperElement}
        hasLeftSwiper={isPrevButtonVisible}
        hasRightSwiper={isNextButtonVisible}
      />

      <CardMenuNavigation refWithRotationMethods={cardMenuRef} />

      <CardMenu ref={cardMenuRef}/>

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
