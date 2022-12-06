import { useRef } from 'react';
import { CombinedHTMLSwiper, RefObjectType } from 'types/style.type';
import * as S from './card.style';
import { CardMenu, CardMenuNavigation, CardRange, CardSliderSwiper, CardSwiper } from './components/components';

const Card = () => {
  const swiperElement = useRef<CombinedHTMLSwiper | null>(null);
  const cardMenuRef = useRef<RefObjectType | null>(null);

  return (
    <S.CardBox>
      <S.CardTopic>Исторические<br/>даты</S.CardTopic>
      <CardRange />

      <S.CardDecoration>
        <p className="visually-hidden">Сменить исторический период</p>
        <S.CardDecorationCross />
      </S.CardDecoration>

      <CardSwiper swiperRef={swiperElement}/>
      <CardMenuNavigation refWithRotationMethods={cardMenuRef} />
      <CardMenu ref={cardMenuRef}/>
      <CardSliderSwiper swiperRef={swiperElement}/>
    </S.CardBox>
  )
}

export default Card;
