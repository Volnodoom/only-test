import { TEN } from "./const"

export const checkTheNumberValue = (value: number) => {
  if(value >= TEN) {
    return value
  }

  return `0${value}`
}
