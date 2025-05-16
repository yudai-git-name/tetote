'use client';

import React from 'react';
import styles from './ButtonSmooth.module.css';
import { FaArrowDownLong } from 'react-icons/fa6';

export type ButtonSmoothItem = {
  label: string;
  id: string;
};

type Props = {
  items: ButtonSmoothItem[];
};

export default function ButtonSmooth({ items }: Props) {
  const handleClick = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = window.innerWidth <= 599 ? 120 : 190;
      const top =
        window.pageYOffset + target.getBoundingClientRect().top - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      {items.map((item, index) => (
        <li key={index} className={styles.detailsNavButtonItem}>
          <button
            className={styles.detailsNavButton}
            onClick={() => handleClick(item.id)}
          >
            {item.label}
            <FaArrowDownLong className={styles.detailsNavIcon} />
          </button>
        </li>
      ))}
    </>
  );
}
