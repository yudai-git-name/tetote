import React from 'react';
import styles from './Cta.module.css';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import { IoIosArrowForward } from 'react-icons/io';

export default function Cta() {
  return (
    <>
      <div className={styles.cta}>
        <div className={clsx(styles.inner, 'innerSecondary')}>
          <div className={styles.content}>
            <p className={styles.text}>
              わたしたちと一緒に働く仲間を募集中です。
              <br />
              少数精鋭のチームで、
              <br />
              あなたも会社も一緒に成長していきましょう。
            </p>
            <div className={styles.button}>
              <Link href={'/entry'} className={styles.buttonLink}>
                ENTRY
                <IoIosArrowForward className={styles.icon} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <Image
            className={styles.image}
            src={'/image/index/cta/cta.png'}
            width={1440}
            height={488}
            alt="近代的な高層ビルの間を階段で上るビジネスマンたち、青空を背景にした都市の風景"
          />
        </div>
      </div>
    </>
  );
}
