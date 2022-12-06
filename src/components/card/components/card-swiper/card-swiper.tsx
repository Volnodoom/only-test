import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { AUTO, SLIDER_LIMIT, SLIDING_SPEED, SPACE_BETWEEN_DESK, SPACE_BETWEEN_MOBILE } from 'utils/const';
import './card-swiper.style';
import './card-swiper.css'
import * as S from './card-swiper.style';
import { CombinedHTMLSwiper } from 'types/style.type';
import { MockData } from 'utils/mock-data';
import { useSelector } from 'react-redux';
import { getActiveIndex } from 'store/selectors';
import { useState } from 'react';

type CardSwiperType = {
  swiperRef: React.MutableRefObject<CombinedHTMLSwiper | null>,
}

const CardSwiper = ({swiperRef}: CardSwiperType) => {
  const[hasLeftSwiper, setHasLeftSwiper] = useState(false);
  const[hasRightSwiper, setHasRightSwiper] = useState(true);

  const activeIndex = useSelector(getActiveIndex);
  const numberOfSlides = MockData[activeIndex].scope.length;

  if(numberOfSlides <= SLIDER_LIMIT) {
    setHasLeftSwiper(false);
    setHasRightSwiper(false);
  }

  return(
    <Swiper
      modules={[Navigation, Pagination, Keyboard]}
      keyboard={{
        enabled: true
      }}
      spaceBetween={SPACE_BETWEEN_MOBILE}
      slidesPerView={AUTO}
      breakpoints={{
        1440: {
          spaceBetween: SPACE_BETWEEN_DESK,
        },
      }}
      speed={SLIDING_SPEED}
      // @ts-ignore: Unreachable code error
      ref={swiperRef}
      className={
        `custom-swiper-property
        ${hasLeftSwiper ? 'custom-swiper-property--left-slider' : ''}
        ${hasRightSwiper ? 'custom-swiper-property--right-slider' : ''}`
      }
    >
      {
        MockData[activeIndex].scope
          .map((line, index) => (
            <SwiperSlide className='custom-slider' key={`${line.year}-uniq-${index}`}>
              <S.CardSwiperTitle>{line.year}</S.CardSwiperTitle>
              <S.CardSwiperText>{line.content}</S.CardSwiperText>
            </SwiperSlide>
          ))
      }
    </Swiper>
  )
}

export default CardSwiper;
