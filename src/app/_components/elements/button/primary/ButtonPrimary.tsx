import React from 'react';
import styles from './ButtonPrimary.module.css';
import Link from 'next/link';

import { IoIosArrowForward } from 'react-icons/io';

type Props = {
	href: string;
}

export default function ButtonPrimary({ href }: Props) {
  return (
    <>
      <Link href={href} className={styles.buttonLink}>
        VIEW MORE
        <IoIosArrowForward className={styles.icon} />
      </Link>
    </>
  );
}
