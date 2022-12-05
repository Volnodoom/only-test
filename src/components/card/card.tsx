import { ChangeEvent, Fragment, useEffect, useRef, useState } from 'react';
import { CombinedHTMLSwiper } from 'types/style.type';
import { ONE, ZERO } from 'utils/const';
import { checkTheNumberValue } from 'utils/utils';
import * as S from './card.style';
import { CardSwiper } from './components/components';

const Card = () => {
  const swiperElement = useRef<CombinedHTMLSwiper | null>(null);
  const [paginationElementsNumber, setPaginationElementsNumber] = useState(ZERO);
  const [activePaginationNumber, setActivePaginationNumber] = useState(ONE)

  useEffect(() => {
    if(swiperElement.current) {
      setPaginationElementsNumber(swiperElement.current.swiper.pagination.bullets.length);
    }

  }, [setPaginationElementsNumber])

  const handleNavigationPrevClick = () => {
    swiperElement.current && swiperElement.current.swiper.slidePrev();
  }

  const handleNavigationNextClick = () => {
    swiperElement.current && swiperElement.current.swiper.slideNext()
  }

  const handlePaginationChange = (evt: ChangeEvent) => {
    const elementNumber = (evt.target as HTMLInputElement).value;
    setActivePaginationNumber(Number(elementNumber));

    swiperElement.current && swiperElement.current.swiper.slideTo(Number(elementNumber) - ONE);
  }

  return (
    <S.CardBox>
      <S.CardTopic>Исторические<br/>даты</S.CardTopic>
      <S.CardRange>
        <S.CardRangeStart>2015</S.CardRangeStart>&nbsp;<S.CardRangeGap>&nbsp;</S.CardRangeGap><S.CardRangeEnd>2022</S.CardRangeEnd>
      </S.CardRange>

      <S.CardDecoration>
        <p className="visually-hidden">Сменить исторический период</p>
        <S.CardDecorationCross />

        <S.CardDecorationList $startAngle={0} $endAngle={0} $animationTime={10}>
          <S.CardButtonItem className="first-position">
            <S.CardDecorationButton $isActive $contentValue={"1"} $startAngle={0} $endAngle={0} $animationTime={10} type="button">
              <S.CardButtonItemTitle $isActive>Наука</S.CardButtonItemTitle>
            </S.CardDecorationButton>
          </S.CardButtonItem>
          <S.CardButtonItem className="second-position">
            <S.CardDecorationButton $contentValue={"2"} $startAngle={0} $endAngle={0} $animationTime={10} type="button"/>
          </S.CardButtonItem>
          {/* <S.CardButtonItem className="third-position">
            <S.CardDecorationButton $contentValue={"3"} type="button"/>
          </S.CardButtonItem>
          <S.CardButtonItem className="fourth-position">
            <S.CardDecorationButton $contentValue={"4"} type="button"/>
          </S.CardButtonItem>
          <S.CardButtonItem className="fifth-position">
            <S.CardDecorationButton $contentValue={"5"} type="button"/>
          </S.CardButtonItem>
          <S.CardButtonItem className="sixth-position">
            <S.CardDecorationButton $contentValue={"6"} type="button"/>
          </S.CardButtonItem> */}
        </S.CardDecorationList>
      </S.CardDecoration>

      <CardSwiper
        swiperRef={swiperElement}
        setPaginationNumber={setActivePaginationNumber}
        hasLeftSwiper
        hasRightSwiper
      />

      <S.CardNavigation>
        <S.CardNavigationNumbers>
          <span>{checkTheNumberValue(activePaginationNumber)}</span>
          /
          <span>{checkTheNumberValue(paginationElementsNumber)}</span>
        </S.CardNavigationNumbers>
        <S.CardNavigationButtonList>
          <S.CardNavigationButtonItem>
            <S.CardNavigationPrevButton
              aria-label="Предыдущий"
              type="button"
              disabled={activePaginationNumber === ONE}
              onClick={handleNavigationPrevClick}
            />
          </S.CardNavigationButtonItem>

          <S.CardNavigationButtonItem>
            <S.CardNavigationNextButton
              aria-label="Следующий"
              type="button"
              disabled={paginationElementsNumber === ONE || activePaginationNumber === paginationElementsNumber}
              onClick={handleNavigationNextClick}
            />
          </S.CardNavigationButtonItem>
        </S.CardNavigationButtonList>
      </S.CardNavigation>

      <S.CardPagination>
        {
          paginationElementsNumber > 0
          ?
          Array
            .from({length: paginationElementsNumber}, (value, index) => ++index)
            .map((number) => (
              <Fragment key={`const-${number}`}>
                <S.CardPaginationInput
                  className="visually-hidden"
                  id={`uniq-input-id${number}`}
                  type="radio"
                  value={number}
                  name="pagination"
                  checked={number === activePaginationNumber}
                  onChange={handlePaginationChange}
                />
                <S.CardPaginationDot htmlFor={`uniq-input-id${number}`} aria-label={`Дата №${number}`}></S.CardPaginationDot>
              </Fragment>
            ))
          :
          ''
        }
      </S.CardPagination>

      <S.CardSliderSwiper>
        <S.CardSliderSwiperLeftButton />
        <S.CardSliderSwiperRightButton />
      </S.CardSliderSwiper>

    </S.CardBox>
  )
}

export default Card;
