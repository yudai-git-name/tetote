import { consultItems } from '@/app/data/details/Consult';
import { solutionItems } from '@/app/data/details/Solution';
import { systemEngineerItems } from '@/app/data/details/SystemEngineer';
import ButtonSmooth, {
  ButtonSmoothItem,
} from '@/app/_components/elements/button/smooth/ButtonSmooth';
import React from 'react';
import styles from './Details.module.css';
import clsx from 'clsx';

const detailsNavItems: ButtonSmoothItem[] = [
  { label: 'コンサルタント', id: 'consult' },
  { label: 'ソリューション営業', id: 'solution' },
  { label: 'システムエンジニア', id: 'systemEngineer' },
];

export default function Details() {
  return (
    <>
      <section className={styles.details}>
        <div className={clsx(styles.inner, 'innerTertiary')}>
          <div className={styles.head}>
            <h2 className={styles.heading2}>
              あなたが輝ける場所が、ここにはある
            </h2>
            <p className={styles.headText}>
              TETOTEでは、コンサルタントを中心に、様々な職種を募集しています。
            </p>
            <nav className={styles.nav}>
              <ul className={styles.navItems}>
                <ButtonSmooth items={detailsNavItems} />
              </ul>
            </nav>
          </div>
          <div className={styles.content}>
            <div className={styles.boxes}>
              <div id="consult" className={styles.box}>
                <h3 className={styles.heading3}>募集要項-コンサルタント</h3>
                <dl className={styles.dl}>
                  {consultItems.map((item, index) => (
                    <div key={index} className={styles.row}>
                      <dt className={styles.dt}>{item.dtTitle}</dt>
                      <dt className={styles.dd}>{item.ddTitle}</dt>
                    </div>
                  ))}
                </dl>
              </div>
              <div id="solution" className={styles.box}>
                <h3 className={styles.heading3}>募集要項-ソリューション営業</h3>
                <dl className={styles.dl}>
                  {solutionItems.map((item, index) => (
                    <div key={index} className={styles.row}>
                      <dt className={styles.dt}>{item.dtTitle}</dt>
                      <dt className={styles.dd}>{item.ddTitle}</dt>
                    </div>
                  ))}
                </dl>
              </div>
              <div id="systemEngineer" className={styles.box}>
                <h3 className={styles.heading3}>募集要項-システムエンジニア</h3>
                <dl className={styles.dl}>
                  {systemEngineerItems.map((item, index) => (
                    <div key={index} className={styles.row}>
                      <dt className={styles.dt}>{item.dtTitle}</dt>
                      <dt className={styles.dd}>{item.ddTitle}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
