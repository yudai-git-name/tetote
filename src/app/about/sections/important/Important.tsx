import { importantItems } from '@/app/data/about/Important';
import styles from './Important.module.css';
import clsx from 'clsx';

export default function Important() {
  return (
    <>
      <section className={styles.important}>
        <div className={clsx(styles.inner, 'innerTertiary')}>
          <div className={styles.head}>
            <h2 className={styles.heading2}>私達が大切にしていること</h2>
          </div>
          <div className={styles.content}>
            <ul className={styles.boxes}>
              {importantItems.map((item, index) => (
                <li key={index} className={styles.box}>
                  <div className={styles.boxHead}>
                    <h3 className={styles.heading3}>{item.title}</h3>
                    <p className={styles.number}>
                      <span className={styles.spanText}>{item.number}</span>
                    </p>
                  </div>
                  <div className={styles.boxBody}>
                    <div className={styles.textWrap}>
                      <p className={styles.text}>{item.text01}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
