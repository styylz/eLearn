import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination } from "swiper";
import styled from "styled-components/macro";

interface SwiperProp {
  children: ReactNode;
}

export const CardSwiper: React.FC<SwiperProp> = ({ children }) => {
  SwiperCore.use([Pagination]);
  return (
    <Swiper
      pagination
      slidesPerView={3}
      spaceBetween={50}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 16,
        },

        600: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

const StyledSwiper = styled(Swiper)`
  height: 700px;
  width: 100vw;
  max-width: 100vw;
`;
