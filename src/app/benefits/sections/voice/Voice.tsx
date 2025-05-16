import {voiceItems} from '@/app/data/benefits/Voice'
import React from 'react';
import styles from './Voice.module.css';
import clsx from 'clsx';
import Image from 'next/image';

export default function Voice() {
  return (
    <>
      <section className={styles.voice}>
        <div className={clsx(styles.inner, 'innerTertiary')}>
          <div className={styles.head}>
            <h2 className={styles.heading2}>制度利用者の声</h2>
          </div>
          <div className={styles.content}>
            <div className={styles.boxes}>
              {voiceItems.map((item, index) => (
                <div key={index} className={styles.box}>
                  <div className={styles.boxHead}>
                    <h3 className={styles.heading3}>{item.name}</h3>
                    <p className={styles.entry}>{item.entry}</p>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.textWrap}>
                      <p className={styles.text}>
                        {item.text01.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.imageWrap}>
              <Image
                src={'/image/index/benefits/benefits_voice.png'}
                width={980}
                height={560}
                alt="スーツ姿の男女2人が笑顔で並ぶビジネスポートレート、女性はタブレットを持っている"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
