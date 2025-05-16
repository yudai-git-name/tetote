import { businessItems } from '@/app/data/about/Business';
import styles from './Business.module.css';
import clsx from 'clsx';
import Image from 'next/image';

export default function Business() {
  return (
    <>
      <section className={styles.business}>
        <div className={clsx(styles.inner, 'innerTertiary')}>
          <div className={styles.head}>
            <h2 className={styles.heading2}>事業紹介</h2>
            <p className={styles.headText}>
              TETOTEの主力事業である「コンサルティング」以外に、新規に取り組んでいる事業をいくつか
              <br />
              紹介させていただきます。
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.boxes}>
              {businessItems.map((item, index) => (
                <div key={index} className={styles.box}>
                  <div className={styles.body}>
                    <h3 className={styles.heading3}>{item.title}</h3>
                    <p className={styles.subTitle}>{item.subTitle}</p>
                    <div className={styles.textWrap}>
                      <p className={styles.text}>{item.text01}</p>
                    </div>
                  </div>
                  <div className={styles.imageWrap}>
                    <Image
                      src={item.image.src}
                      width={item.image.width}
                      height={item.image.height}
                      alt={item.image.alt}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
