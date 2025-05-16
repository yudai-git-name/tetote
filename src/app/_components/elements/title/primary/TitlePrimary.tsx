import React from 'react';
import styles from './TitlePrimary.module.css';

type Props = {
  titleEn: string;
  titleJa: string;
  spanText: string;
  enClassName?: string;
	subText: string;
};

export default function TitlePrimary({
  titleEn,
  titleJa,
  spanText,
  enClassName,
  subText,
}: Props) {
  return (
    <div className={styles.titleWrap}>
      <hgroup className={styles.heading2}>
        <h2 className={`${styles.en} ${enClassName ?? ''}`}>{titleEn}</h2>{' '}
        <p className={styles.ja}>
          <span className={styles.span}>{spanText}</span>
          {titleJa}
        </p>
      </hgroup>
      <p className={styles.subText}>
        {subText.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== subText.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}
