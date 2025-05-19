// src/app/home/staff/HomeStaff.tsx

'use client';


import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from './HomeStaff.module.css';
import TitlePrimary from '@/app/_components/elements/title/primary/TitlePrimary';
import ButtonPrimary from '@/app/_components/elements/button/primary/ButtonPrimary';
import CardStaff from '@/app/_components/elements/card/staff/CardStaff';

type StaffItem = {
  slug: string;
  name: string;
  position: string;
  entry: string;
  message01: string;
  message02: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

type Props = {
  items: StaffItem[];
};

export default function HomeStaff({ items }: Props) {
  return (
    <section className={styles.staff}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <TitlePrimary
            titleEn="MEMBER"
            titleJa="を知る"
            spanText="人"
            enClassName={styles.staffEn}
            subText={`TETOTEの社員がどういった信念を持って働いているのか、\n一日のスケジュールや仕事内容などを紹介します。`}
          />
        </div>
        <div className={styles.slider}>
          <Splide
            options={{
							type: 'slide',
              perMove: 1,
              perPage: 3,
              gap: 43,
              rewind: true,
              pagination: false,
              drag: true,
              dragAngleThreshold: 45,
              flickPower: 600,
              flickVelocityThreshold: 0.6,
              breakpoints: {
                980: { gap: 20,},
                768: { perPage: 2 },
                599: { perPage: 1},
              },
              classes: {
                arrows: styles.arrows,
                arrow: styles.arrow,
                prev: styles.prev,
                next: styles.next,
              },
            }}
          >
            {items.map((item, index) => (
              <SplideSlide key={index} className={styles.slide}>
                <CardStaff item={item} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className={styles.button}>
          <ButtonPrimary href="/staff" />
        </div>
      </div>
    </section>
  );
}
