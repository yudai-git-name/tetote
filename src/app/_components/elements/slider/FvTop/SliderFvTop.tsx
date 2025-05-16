'use client';

import {FvSlideItems} from '@/app/data/slider/FvSlider'

import React from 'react';
import styles from './SliderFvTop.module.css';
import Image from 'next/image';
import clsx from 'clsx';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function SliderFvTop() {
  return (
    <Splide
      options={{
        perMove: 1,
        type: 'fade',
        autoplay: true,
        interval: 5000,
        speed: 2000,
        rewind: true,
        gap: 20,
        pauseOnHover: false,
        pauseOnFocus: false,
        focus: 'center',
        arrows: false,
        pagination: false,
      }}
    >
      {FvSlideItems.map((slide, index) => (
        <SplideSlide key={index}>
          <Image
            className={clsx(styles.image, styles[slide.className])}
            src={slide.src}
            width={1190}
            height={700}
            alt={slide.alt}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}
