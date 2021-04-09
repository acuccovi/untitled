import {HttpBinJsonResponseSlide} from './http-bin-json-response-slide';

export interface HttpBinJsonResponseSlideshow {
  author: string;
  date: string;
  slides: Array<HttpBinJsonResponseSlide>;
  title: string;
}
