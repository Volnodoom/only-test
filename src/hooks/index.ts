import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getActiveIndex, getPreviousIndex } from "store/selectors";
import { getEndDate, getStartDate } from "utils/utils";

type UseIntervalType = {
  duration: number,
  setFirstDateAnimation: React.Dispatch<React.SetStateAction<number | null>>
  setSecondDateAnimation: React.Dispatch<React.SetStateAction<number | null>>
}

export function useInterval({duration, setFirstDateAnimation, setSecondDateAnimation}: UseIntervalType) {
  const savedCallbackFirst = useRef<() => void | null>(null);
  const savedCallbackSecond = useRef<() => void | null>(null);
  const activeIndex = useSelector(getActiveIndex);
  const previousIndex = useSelector(getPreviousIndex);

  const currentStartDate = getStartDate(activeIndex);
  const previousStartDate = getStartDate(previousIndex);
  const currentEndDate = getEndDate(activeIndex);
  const previousEndDate = getEndDate(previousIndex);

  const [valueFirst, setValueFirst] = useState<number>(previousStartDate);
  const [valueSecond, setValueSecond] = useState<number>(previousEndDate);
  const isPositiveStartDifference = currentStartDate > previousStartDate;
  const isPositiveEndDifference = currentEndDate > previousEndDate;
  const incrementFirst =  isPositiveStartDifference ? 2 : -2;
  const incrementSecond =  isPositiveEndDifference ? 2 : -2;

  // manipulations for correcting first value of the date that represent the start of the event
  useEffect(() => {
    // @ts-ignore
    savedCallbackFirst.current = () => {
      if(
          (isPositiveStartDifference && valueFirst >= currentStartDate)
          ||
          (!isPositiveStartDifference && valueFirst <= currentStartDate)
        ) {
        setFirstDateAnimation(currentStartDate);
        return;
      }

      setValueFirst( prev => prev + incrementFirst);
      setFirstDateAnimation( prev => prev as number + incrementFirst);
    };
  }, [currentStartDate, incrementFirst, isPositiveStartDifference, setFirstDateAnimation, valueFirst]);


  useEffect(() => {
    if(currentStartDate === previousStartDate) return;

    function tickFirst() {
      savedCallbackFirst.current && savedCallbackFirst.current();
    }

    const id = setInterval(tickFirst, duration);
    return () => clearInterval(id);
  }, [currentStartDate, duration, previousStartDate]);


  // manipulations for correcting second value of the date that represent the end of the event
  useEffect(() => {
    // @ts-ignore
    savedCallbackSecond.current = () => {
      if(
          (isPositiveEndDifference && valueSecond >= currentEndDate)
          ||
          (!isPositiveEndDifference && valueSecond <= currentEndDate)
        ) {
        setSecondDateAnimation(currentEndDate);
        return;
      }

      setValueSecond( prev => prev + incrementSecond);
      setSecondDateAnimation( prev => prev as number + incrementSecond);
    };
  }, [currentEndDate, incrementSecond, isPositiveEndDifference, setSecondDateAnimation, valueSecond]);


  useEffect(() => {
    if(currentEndDate === previousEndDate) return;

    function tickSecond() {
      savedCallbackSecond.current && savedCallbackSecond.current();
    }

    const id = setInterval(tickSecond, duration);
    return () => clearInterval(id);
  }, [currentEndDate, duration, previousEndDate]);


}
