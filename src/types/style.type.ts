import SwiperCore from 'swiper';

export type DefaultParamsForTheme = {
  font: {[x: string]: string},
  color: {[x: string]: string},
};

export type ThemeParameters = {
  theme: DefaultParamsForTheme
};

export interface CombinedHTMLSwiper extends HTMLElement {swiper: SwiperCore};
