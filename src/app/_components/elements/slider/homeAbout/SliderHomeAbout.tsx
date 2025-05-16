'use client';
import Image from 'next/image';
import styles from './SliderHomeAbout.module.css';

const images = [
  '/image/index/about/about_home-slider01.png',
  '/image/index/about/about_home-slider02.png',
  '/image/index/about/about_home-slider03.png',
];

export default function SliderHomeAbout() {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderTrack}>
        {[...images, ...images].map((src, index) => (
          <div className={styles.slide} key={index}>
            <Image
              src={src}
              alt={`スライド${index + 1}`}
              width={600}
              height={400}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
