// src/app/_components/elements/card/staff/CardStaff.tsx

import Image from 'next/image';
import styles from './CardStaff.module.css';
import Link from 'next/link';

type Props = {
  item: {
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
};

export default function CardStaff({ item }: Props) {
  return (
    <Link href={`/staff/${item.slug}`} className={styles.card}>
      <div className={styles.body}>
        <div className={styles.bodyHead}>
          <h3 className={styles.heading3}>{item.name}</h3>
          <div className={styles.wrap}>
            <p className={styles.position}>{item.position}</p>
            <p className={styles.entry}>{item.entry}</p>
          </div>
        </div>
        <h4 className={styles.heading4}>
          <span className={styles.heading4Top}>{item.message01}</span>
          <span className={styles.heading4Bottom}>{item.message02}</span>
        </h4>
      </div>
      <Image
        className={styles.image}
        src={item.image.src}
        width={item.image.width}
        height={item.image.height}
        alt={item.image.alt}
      />
    </Link>
  );
}
