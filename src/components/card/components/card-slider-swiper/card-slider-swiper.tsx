import { useState } from "react";
import { useSelector } from "react-redux";
import { getActiveIndex } from "store/selectors";
import { CombinedHTMLSwiper } from "types/style.type";
import { SLIDER_LIMIT } from "utils/const";
import { MockData } from "utils/mock-data";
import * as S from "./card-slider-swiper.style";

type CardSliderSwiperType = {
  swiperRef: React.MutableRefObject<CombinedHTMLSwiper | null>,
}

const CardSliderSwiper = ({swiperRef}: CardSliderSwiperType, ) => {
  const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(false);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(true);

  const activeIndex = useSelector(getActiveIndex);
  const numberOfSlides = MockData[activeIndex].scope.length;

  const handleNavigationPrevClick = () => {
    swiperRef.current && swiperRef.current.swiper.slidePrev();

    if(swiperRef.current && (swiperRef.current.swiper.activeIndex === 0)) {
      setIsPrevButtonVisible(false);
      swiperRef.current.classList.remove('custom-swiper-property--left-slider');
    }

    if(
        numberOfSlides > SLIDER_LIMIT
        &&
        swiperRef.current
        &&
        swiperRef.current.swiper.activeIndex < (numberOfSlides - SLIDER_LIMIT)
      ) {
        setIsNextButtonVisible(true);
        swiperRef.current.classList.add('custom-swiper-property--right-slider');
    }
  }

  const handleNavigationNextClick = () => {
    swiperRef.current && swiperRef.current.swiper.slideNext();

    if(swiperRef.current && (swiperRef.current.swiper.activeIndex > 0)) {
      setIsPrevButtonVisible(true);
      swiperRef.current.classList.add('custom-swiper-property--left-slider');
    }

    if(
        swiperRef.current
        &&
        swiperRef.current.swiper.activeIndex === (numberOfSlides - SLIDER_LIMIT)
      ) {
        setIsNextButtonVisible(false);
        swiperRef.current.classList.remove('custom-swiper-property--right-slider');
    }
  }
  return (
    <S.CardSliderSwiper>
    {
      isPrevButtonVisible ? <S.CardSliderSwiperLeftButton onClick={handleNavigationPrevClick}/> : <p></p>
    }

    {
      isNextButtonVisible ? <S.CardSliderSwiperRightButton onClick={handleNavigationNextClick}/> : <p></p>
    }
  </S.CardSliderSwiper>
  )
}

export default CardSliderSwiper;
