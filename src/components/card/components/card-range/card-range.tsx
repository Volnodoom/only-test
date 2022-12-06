import { useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./card-range.style";
import { useInterval } from "../../../../hooks";
import { getEndDate, getStartDate } from "utils/utils";
import { NUMBER_CHANGE_TIMER } from "utils/const";
import { getActiveIndex } from "store/selectors";

const CardRange = () => {
  const activeIndex = useSelector(getActiveIndex);
  const startDate = getStartDate(activeIndex);
  const endDate = getEndDate(activeIndex);

  const [startDateAnimation, setStartDateAnimation] = useState<number | null>(startDate);
  const [endDateAnimation, setEndDateAnimation] = useState<number | null>(endDate);

  useInterval({
    duration: NUMBER_CHANGE_TIMER,
    setFirstDateAnimation: setStartDateAnimation,
    setSecondDateAnimation: setEndDateAnimation,
  })

  return (
    <S.CardRange>
      <S.CardRangeStart>{startDateAnimation}</S.CardRangeStart>
      &nbsp;<S.CardRangeGap>&nbsp;</S.CardRangeGap>
      <S.CardRangeEnd>{endDateAnimation}</S.CardRangeEnd>
    </S.CardRange>
  )
}

export default CardRange;
