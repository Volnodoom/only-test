import { PositionValues, TEN } from "./const"

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
