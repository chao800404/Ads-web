/** @format */

import Swiper from "swiper/bundle";
import { CENTERSLIDE, SWIPERSPACEBETWEEN, SLIDESPERVIEW } from "../congfig";

export const swipers = function (swiper, nextBtn, prevBtn) {
  return new Swiper(swiper, {
    slidesPerView: SLIDESPERVIEW,
    centeredSlides: CENTERSLIDE,
    spaceBetween: SWIPERSPACEBETWEEN,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
    observeParents: true,
    observer: true,
  });
};
