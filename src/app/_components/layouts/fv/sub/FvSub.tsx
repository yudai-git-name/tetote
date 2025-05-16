import Image from 'next/image';
import styles from './FvSub.module.css';
import clsx from 'clsx';

type Props = {
  titleEn: string;
  titleJa: string;
  introduction: string;
	src: string;
	alt: string;
};

export default function FvSub({ titleEn, titleJa, introduction, src, alt }: Props) {
  return (
    <>
      <div className={styles.fvSub}>
        <div className={clsx(styles.inner, 'innerTertiary')}>
          <hgroup className={styles.heading2}>
            <h2 className={styles.en}>{titleEn}</h2>
            <p className={styles.ja}>{titleJa}</p>
          </hgroup>
          <p className={styles.introduction}>{introduction}</p>
        </div>
        <div className={styles.imageWrap}>
          <Image
            className={styles.image}
            src={src}
            width={1440}
            height={339}
            alt={alt}
          />
        </div>
      </div>
    </>
  );
}
