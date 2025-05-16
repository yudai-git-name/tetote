'use client';

import React from 'react';
import styles from './newsTop.module.css';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

type Props = {
  item: {
    id: string;
    title: string;
  };
};

export default function NewsTop({ item }: Props) {
  return (
    <Link href={`/blog/${item.id}`} className={styles.newsTop}>
      <div className={styles.inner}>
        <p className={styles.head}>NEWS</p>
        <div className={styles.body}>
          <h3 className={styles.heading3}>{item.title}</h3>
          <p className={styles.more}>
            <span className={styles.span}>
              VIEW MORE <IoIosArrowForward className={styles.icon} />
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
