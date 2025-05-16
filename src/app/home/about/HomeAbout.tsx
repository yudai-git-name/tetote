import React from 'react';
import styles from './HomeAbout.module.css';
import clsx from 'clsx';

import ButtonPrimary from '@/app/_components/elements/button/primary/ButtonPrimary';
import SliderHomeAbout from '@/app/_components/elements/slider/homeAbout/SliderHomeAbout';

export default function HomeAbout() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.heading2}>
            <span className={styles.top}>後悔しないキャリアを作る、</span>
            <span className={styles.bottom}>それこそが、我々の使命だ</span>
          </h2>
        </div>
        <div className={styles.slider}>
          <SliderHomeAbout />
        </div>
        <div className={clsx(styles.content, 'innerPrimary')}>
          <div className={styles.texts}>
            <p className={styles.text}>
              「人手不足」
              <br />
              今の日本が抱えるこの社会課題に挑み、
              <br />
              企業と個人の可能性を最大限に引き出す。
              <br />
              それが私達の役目。
            </p>
            <p className={styles.text}>
              単につなぐだけじゃない。
              <br />
              「手と手」を取り合っていけるような、
              <br />
              持続可能な社会を、一緒に作りませんか？
            </p>
          </div>
          <div className={styles.button}>
            <ButtonPrimary href="/about" />
          </div>
        </div>
      </div>
    </section>
  );
}
