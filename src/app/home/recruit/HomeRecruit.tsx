import React from 'react';
import styles from './HomeRecruit.module.css';
import clsx from 'clsx';
import Link from 'next/link';

import { IoIosArrowForward } from 'react-icons/io';
import TitlePrimary from '@/app/_components/elements/title/primary/TitlePrimary';

export type buttonItem = {
  href: string;
  label: string;
  className?: string;
};

export const buttonItems: buttonItem[] = [
  {
    href: 'details',
    label: '募集要項',
  },
  {
    href: 'faq',
    label: 'よくある質問',
  },
  {
    href: 'about',
    label: '会社概要',
    className: 'oneColumn',
  },
];

export default function HomeRecruit() {
  return (
    <>
      <section className={styles.recruit}>
        <div className={clsx(styles.inner, 'innerSecondary')}>
          <div className={styles.head}>
            <TitlePrimary
              titleEn="RECRUIT"
              titleJa="採用情報"
              spanText=""
              enClassName={styles.staffRecruit}
              subText={`募集要項（職種、業務内容、応募条件、選考フロー）とよくある質問・会社概要などをまとめています。`}
            />
          </div>
          <div className={styles.buttons}>
            {buttonItems.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  styles.button,
                  item.className && styles[item.className]
                )}
              >
                <Link href={item.href} className={styles.buttonLink}>
                  {item.label}
                  <IoIosArrowForward className={styles.icon} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
