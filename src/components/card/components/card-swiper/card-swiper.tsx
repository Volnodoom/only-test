import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { AUTO, SLIDING_SPEED, SPACE_BETWEEN_DESK, SPACE_BETWEEN_MOBILE } from 'utils/const';
import './card-swiper.style';
import './card-swiper.css'
import * as S from './card-swiper.style';
import { CombinedHTMLSwiper } from 'types/style.type';
import { MockData } from 'utils/mock-data';

type CardSwiperType = {
  swiperRef: React.MutableRefObject<CombinedHTMLSwiper | null>,
  hasLeftSwiper: boolean,
  hasRightSwiper: boolean,
  activeMenuSection: number,
}

const CardSwiper = ({swiperRef, hasLeftSwiper, hasRightSwiper, activeMenuSection}: CardSwiperType) => {

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
        MockData[activeMenuSection].scope
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
