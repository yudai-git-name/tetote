import React from 'react';
import styles from './CardBlog.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  items?: {
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
  isBg?: boolean;
};

export default function CardBlog({ items = [], isBg = true }: Props) {
  if (items.length === 0) {
    return <p>ブログ記事が見つかりません。</p>;
  }

  return (
    <>
      {items.map((item) => (
        <article key={item.id} className={styles.card}>
          <Link
            href={`/blog/${item.id}`}
            className={`${styles.cardLink} ${
              isBg ? styles.primary : styles.secondary
            }`}
          >
            <div className={styles.body}>
              <div className={styles.bodyHead}>
                <p className={styles.category}>{item.category}</p>
                <h3 className={styles.heading3}>{item.title}</h3>
              </div>
              <time dateTime={item.publishedAt} className={styles.date}>
                {item.publishedAt}
              </time>
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
          </Link>
        </article>
      ))}
    </>
  );
}
