import { companyItems } from '@/app/data/about/Company';
import styles from './Company.module.css';
import clsx from 'clsx';

export default function Company() {
  return (
    <>
      <section className={styles.company}>
        <div className={clsx(styles.inner, 'innerTertiary')}>
          <div className={styles.head}>
            <h2 className={styles.heading2}>会社概要</h2>
          </div>
          <div className={styles.content}>
            <div className={styles.table}>
              <div className={styles.dl}>
                {companyItems.map((item, index) => (
                  <div key={index} className={styles.row}>
                    <dt className={styles.dt}>{item.dtText}</dt>
                    <dt className={styles.dd}>{item.ddText}</dt>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
