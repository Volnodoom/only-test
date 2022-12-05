import SwiperCore from 'swiper';

export type DefaultParamsForTheme = {
  font: {[x: string]: string},
  color: {[x: string]: string},
};

export type ThemeParameters = {
  theme: DefaultParamsForTheme
};

export interface CombinedHTMLSwiper extends HTMLElement {swiper: SwiperCore};

export type MenuListType = {
  $startAngle: number,
  $endAngle: number,
  $animationTime: number,
  $currentAngle?: number,
}

export type MenuDotType = {
  $contentValue: number,
  $isChecked?: boolean,
} & MenuListType;

export type MenuTitleType = {
  $isChecked?: boolean,
}

export type SingleInfo = {
  year: number,
  content: string,
}

export type MockDataType = {
  field: string,
  scope: SingleInfo[],
}
