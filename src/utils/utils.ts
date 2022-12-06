import { ONE, PositionValues, TEN } from "./const"
import { MockData } from "./mock-data"

export const checkTheNumberValue = (value: number) => {
  if(value >= TEN) {
    return value
  }

  return `0${value}`
}

export const reversePositionValue = (value: number) => {
  if(value === PositionValues.six) {
    return PositionValues.one
  }

  if(value === PositionValues.five) {
    return PositionValues.two
  }

  if(value === PositionValues.four) {
    return PositionValues.three
  }

  return 0;
}

const sortAscending = (index: number) => MockData[index]
.scope
.slice()
.sort((valueA, valueB) => valueA.year - valueB.year);

export const getStartDate = (activeIndex: number) => sortAscending(activeIndex)[0].year;
export const getEndDate = (activeIndex: number) =>  sortAscending(activeIndex)[sortAscending(activeIndex).length - ONE].year;
