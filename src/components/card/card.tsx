import { useRef, useState } from 'react';
import { CombinedHTMLSwiper } from 'types/style.type';
import { ONE, ZERO } from 'utils/const';
import { MockData } from 'utils/mock-data';
import * as S from './card.style';
import { CardMenu, CardMenuNavigation, CardSwiper } from './components/components';

const Card = () => {
  const swiperElement = useRef<CombinedHTMLSwiper | null>(null);
  const [paginationElementsNumber, setPaginationElementsNumber] = useState(ZERO);
  const [activePaginationNumber, setActivePaginationNumber] = useState(ONE);

  // const startDate = MockData

  const handleNavigationPrevClick = () => {
    swiperElement.current && swiperElement.current.swiper.slidePrev();
  }

  const handleNavigationNextClick = () => {
    swiperElement.current && swiperElement.current.swiper.slideNext()
  }

  // const handlePaginationChange = (evt: ChangeEvent) => {
  //   const elementNumber = (evt.target as HTMLInputElement).value;
  //   setActivePaginationNumber(Number(elementNumber));

  //   swiperElement.current && swiperElement.current.swiper.slideTo(Number(elementNumber) - ONE);
  // }

  return (
    <S.CardBox>
      <S.CardTopic>Исторические<br/>даты</S.CardTopic>
      <S.CardRange>
        <S.CardRangeStart>2015</S.CardRangeStart>&nbsp;<S.CardRangeGap>&nbsp;</S.CardRangeGap><S.CardRangeEnd>2022</S.CardRangeEnd>
      </S.CardRange>

      <S.CardDecoration>
        <p className="visually-hidden">Сменить исторический период</p>
        <S.CardDecorationCross />
      </S.CardDecoration>

      <CardSwiper
        activeIndexNumber={1}
        swiperRef={swiperElement}
        setPaginationNumber={setActivePaginationNumber}
        hasLeftSwiper
        hasRightSwiper
      />

      <CardMenuNavigation activeIndexNumber={1}/>
      <CardMenu activeIndexNumber={1}/>

      <S.CardSliderSwiper>
        <S.CardSliderSwiperLeftButton onClick={handleNavigationPrevClick}/>
        <S.CardSliderSwiperRightButton onClick={handleNavigationNextClick}/>
      </S.CardSliderSwiper>

    </S.CardBox>
  )
}

export default Card;
