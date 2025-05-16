import React from 'react';
import styles from './HomeBenefits.module.css';
import clsx from 'clsx';
import Image from 'next/image';

import TitlePrimary from '@/app/_components/elements/title/primary/TitlePrimary';
import { benefitsItems } from '@/app/data/benefits/Home';

export default function HomeBenefits() {
  return (
    <>
      <section className={styles.benefits}>
        <div className={clsx(styles.inner, 'innerPrimary')}>
          <div className={styles.head}>
            <TitlePrimary
              titleEn="BENEFITS"
              spanText="制度・環境"
              titleJa="を知る"
              subText={`当社では働く従業員とそのご家族が健やかに過ごせるよう、多様な研修、福利厚生を提供しています。`}
            />
          </div>
          <div className={styles.boxes}>
            {benefitsItems.map((item, index) => (
              <div key={index} className={styles.box}>
                <div className={styles.body}>
                  <h3 className={styles.heading3}>{item.title}</h3>
                  <div className={styles.textWrap}>
                    <p className={styles.text}>{item.text}</p>
                  </div>
                  <p className={styles.en}>{item.titleEn}</p>
                </div>
                <div className={styles.imageWrap}>
                  <Image
                    className={styles.image}
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
