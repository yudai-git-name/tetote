import React from 'react';
import styles from './Fooer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { navItems, snsItems } from '@/app/data/nav/NavFooter';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.innerSecond}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <Image
                src="/image/_common/logo/logo_black.svg"
                width={250}
                height={61}
                alt="TETOTE.co.ltd | RECRUITING"
              />
            </div>
            <nav className={styles.nav}>
              <ul className={styles.items}>
                {navItems.map((item, index) => (
                  <li key={index} className={styles.item}>
                    <Link href={item.href} className={styles.itemLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={styles.bottom}>
            <p className={styles.copyRight}>
              &copy; 2024 TETOTE All Right Reserved.
            </p>
            <div className={styles.sns}>
              {snsItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className={styles.snsItem}>
                    <Link href={item.href} className={styles.snsLink}>
                      <Icon />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
