import React from 'react';
import styles from './FvTop.module.css';

import SliderFvTop from '@/app/_components/elements/slider/FvTop/SliderFvTop';
import NewsTop from '@/app/_components/elements/news/newsTop/NewsTop';
import { getBlogList } from '@/app/_libs/microcms/blog';

export default async function FvTop() {
  const blogData = await getBlogList({ limit: 1 });
  const latestBlog = blogData.contents[0];

  return (
    <div className={styles.fvTop}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.head}>
            <h2 className={styles.heading2}>
              BECOME A <br />
              CHALLENGER.
            </h2>
            <p className={styles.subTitle}>君の挑戦が、意思が、未来を変える</p>
          </div>
          {latestBlog && (
            <NewsTop item={{ id: latestBlog.id, title: latestBlog.title }} />
          )}
        </div>
        <SliderFvTop />
      </div>
    </div>
  );
}
