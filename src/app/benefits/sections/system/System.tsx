import {systemItems} from '@/app/data/benefits/System'
import React from 'react';
import clsx from 'clsx';
import styles from './System.module.css';

export default function System() {
  return (
    <>
      <section className={styles.system}>
        <div className={clsx(styles.inner, 'innerTertiary')}>
          <div className={styles.head}>
            <h2 className={styles.heading2}>各種制度</h2>
          </div>
          <div className={styles.table}>
            <dl className={styles.dl}>
              {systemItems.map((item, index) => (
                <div key={index} className={styles.row}>
                  <dt className={styles.dt}>{item.dtTitle}</dt>
                  <dt className={styles.dd}>
                    {' '}
                    {item.ddText.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
