import React from 'react';
import styles from './ButtonNav.module.css';
import Link from 'next/link';
import clsx from 'clsx';
import { navButtons } from '@/app/data/nav/NavButton';

type Props = {
  header?: boolean;
  menu?: boolean;
  onClickAll?: () => void;
};

export default function ButtonNav({ header, menu, onClickAll }: Props) {
  return (
    <>
      {navButtons.map((btn, index) => (
        <div
          key={index}
          className={clsx(
            styles.button,
            header && styles.header,
            menu && styles.menu
          )}
        >
          <Link
            href={btn.href}
            className={clsx(styles.buttonLink, styles[btn.className])}
            onClick={onClickAll}
          >
            {btn.label}
          </Link>
        </div>
      ))}
    </>
  );
}

