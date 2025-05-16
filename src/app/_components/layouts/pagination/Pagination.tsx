'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './Pagination.module.css';

type Props = {
  totalPages: number;
  currentPage: number;
};

export default function Pagination({ totalPages, currentPage }: Props) {
  return (
    <div className={styles.pagination}>
      <ul className={styles.paginationItems}>
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNum = index + 1;
          return (
            <li key={pageNum} className={styles.paginationItem}>
              <Link
                href={`/blog/p/${pageNum}`}
                className={clsx(styles.paginationLink, {
                  [styles.current]: pageNum === currentPage,
                })}
              >
                {pageNum}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
