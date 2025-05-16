'use client';

import { navItems } from '@/app/data/nav/NavHeader';
import { navButtons } from '@/app/data/nav/NavButton';

import React from 'react';
import styles from './DrawerMenu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  isOpen: boolean;
};

export default function DrawerMenu({ isOpen }: Props) {
  return (
    <div className={clsx(styles.drawerMenu, { [styles.open]: isOpen })}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/image/_common/logo/logo_black.svg"
                width={250}
                height={61}
                alt="TETOTEロゴ"
              />
            </Link>
          </div>
          <div className={styles.navArea}>
            <nav className={styles.nav}>
              <ul className={styles.items}>
                {navItems.map((item, index) => (
                  <li key={index} className={styles.item}>
                    <Link href={item.href} className={styles.itemLink}>
                      <span className={styles.en}>{item.titleEn}</span>
                      <span className={styles.ja}>{item.titleJa}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.buttons}>
              {navButtons.map((btn, index) => (
                <div key={index} className={styles.button}>
                  <Link
                    href={btn.href}
                    className={clsx(styles.buttonLink, styles[btn.className])}
                  >
                    {btn.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
