import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, type Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ONE, PAGINATION_CLASS, SLIDING_SPEED, SPACE_BETWEEN } from 'utils/const';
import './card-swiper.style';
import './card-swiper.css'
import * as S from './card-swiper.style';
import { CombinedHTMLSwiper } from 'types/style.type';

type CardSwiperType = {
  swiperRef: React.MutableRefObject<CombinedHTMLSwiper | null>,
  setPaginationNumber: React.Dispatch<React.SetStateAction<number>>,
}

const CardSwiper = ({swiperRef, setPaginationNumber}: CardSwiperType) => {
  const handleSwiperChange = (swiper: SwiperType) => {
    setPaginationNumber(swiper.activeIndex + ONE);
  }

  return(
    <Swiper
      modules={[Navigation, Pagination, Keyboard]}
      pagination={{
        el: `.${PAGINATION_CLASS}`,
        clickable: true,
      }}
      keyboard={{
        enabled: true
      }}
      spaceBetween={SPACE_BETWEEN}
      speed={SLIDING_SPEED}
      onSlideChange={handleSwiperChange}
      // @ts-ignore: Unreachable code error
      ref={swiperRef}
      className='custom-swiper-property'
    >
      <SwiperSlide className='custom-slider'>
        <S.CardSwiperTitle>2015</S.CardSwiperTitle>
        <S.CardSwiperText>13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</S.CardSwiperText>
      </SwiperSlide>

      <SwiperSlide className='custom-slider'>
        <S.CardSwiperTitle>2016</S.CardSwiperTitle>
        <S.CardSwiperText>Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11</S.CardSwiperText>
      </SwiperSlide>

      <SwiperSlide className='custom-slider'>
        <S.CardSwiperTitle>2017</S.CardSwiperTitle>
        <S.CardSwiperText>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</S.CardSwiperText>
      </SwiperSlide>
      <div className={`${PAGINATION_CLASS} visually-hidden`}></div>
    </Swiper>
  )
}

export default CardSwiper;
