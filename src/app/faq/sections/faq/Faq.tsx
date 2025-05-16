import ButtonSmooth, {
  ButtonSmoothItem,
} from '@/app/_components/elements/button/smooth/ButtonSmooth';
import { applyItems } from '@/app/data/faq/apply';
import { careerItems } from '@/app/data/faq/career';
import { benefitsItems } from '@/app/data/faq/benefits';

import React from 'react';
import styles from './Faq.module.css';
import clsx from 'clsx';

const faqNavItems: ButtonSmoothItem[] = [
  { label: '応募・選考について', id: 'apply' },
  { label: 'キャリアについて', id: 'career' },
  { label: '福利厚生について', id: 'benefits' },
];

export default function faq() {
  return (
    <>
      <section className={styles.faq}>
        <div className={clsx(styles.inner, 'innerTertiary')}>
          <nav className={styles.nav}>
            <ul className={styles.navItems}>
              <ButtonSmooth items={faqNavItems} />
            </ul>
          </nav>
          <div className={styles.content}>
            <div className={styles.boxes}>
              <div id="apply" className={styles.box}>
                <h3 className={styles.heading3}>応募・選考について</h3>
                <div className={styles.table}>
                  {applyItems.map((item, index) => (
                    <details
                      key={index}
                      open={index === 1}
                      className={styles.details}
                    >
                      <summary className={styles.q}>
                        <span className={styles.span}>{item.question}</span>
                      </summary>
                      <p className={styles.a}>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
              <div id="career" className={styles.box}>
                <h3 className={styles.heading3}>キャリアについて</h3>
                <div className={styles.table}>
                  {careerItems.map((item, index) => (
                    <details
                      key={index}
                      open={index === 1}
                      className={styles.details}
                    >
                      <summary className={styles.q}>
                        <span className={styles.span}>{item.question}</span>
                      </summary>
                      <p className={styles.a}>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
              <div id="benefits" className={styles.box}>
                <h3 className={styles.heading3}>福利厚生について</h3>
                <div className={styles.table}>
                  {benefitsItems.map((item, index) => (
                    <details
                      key={index}
                      open={index === 1}
                      className={styles.details}
                    >
                      <summary className={styles.q}>
                        <span className={styles.span}>{item.question}</span>
                      </summary>
                      <p className={styles.a}>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
