import React from 'react';
import styles from './HomeBlog.module.css';
import clsx from 'clsx';
import Link from 'next/link';

import CardBlog from '@/app/_components/elements/card/blog/CardBlog'
import { IoIosArrowRoundForward } from 'react-icons/io';
import TitlePrimary from '@/app/_components/elements/title/primary/TitlePrimary';

type Props = {
  items: {
    id: string;
    title: string;
    publishedAt: string;
    category: string;
    image: {
      src: string;
      width: number;
      height: number;
      alt: string;
    };
  }[];
};

export default function HomeBlog({ items }: Props) {
  return (
    <section className={styles.blog}>
      <div className={clsx(styles.inner, 'innerPrimary')}>
        <div className={styles.head}>
          <TitlePrimary
            titleEn="BLOG"
            spanText=""
            titleJa="採用ブログ"
            subText={`採用情報やイベント情報、社員の紹介など、\n日々の現場の様子をご紹介します。`}
            enClassName={styles.staffBlog}
          />
          <div className={styles.more}>
            <Link href={'/blog'} className={styles.moreLink}>
              <IoIosArrowRoundForward className={styles.icon} />
              VIEW MORE
            </Link>
          </div>
        </div>
        <div className={styles.boxes}>
          <CardBlog items={items} isBg={true} />
        </div>
      </div>
    </section>
  );
}
