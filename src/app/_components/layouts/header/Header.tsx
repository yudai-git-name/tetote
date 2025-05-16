'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navButtons } from '@/app/data/nav/NavButton';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import DrawerButton from '../drawer/drawerButton/DrawerButton';

type Props = {
  toggleDrawer: () => void;
  isOpen: boolean;
};

export default function Header({ toggleDrawer, isOpen }: Props) {
  const [isAtAbout, setIsAtAbout] = useState(false);

const pathname = usePathname();

useEffect(() => {
  if (pathname !== '/') return; // トップページ以外では処理しない

  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;

  const handleScroll = () => {
    const rect = aboutSection.getBoundingClientRect();
    setIsAtAbout(rect.top <= 0);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}, [pathname]);


  const logoSrc =
    pathname !== '/' || isOpen || isAtAbout
      ? '/image/_common/logo/logo_black.svg'
      : '/image/_common/logo/logo_white.svg';

  return (
    <>
      <header
        className={clsx(styles.header, {
          [styles.whiteBg]: pathname !== '/' || isOpen || isAtAbout,
        })}
      >
        <div className={styles.inner}>
          <h1 className={styles.heading1}>
            <Link href="/" className={styles.heading1Logo}>
              <Image
                src={logoSrc}
                width={250}
                height={61}
                alt="TETOTE.co.ltd | RECRUITING"
              />
            </Link>
          </h1>
          <div className={styles.content}>
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
      </header>
      <DrawerButton
        onClick={toggleDrawer}
        isOpen={isOpen}
        isAtAbout={isAtAbout}
        pathname={pathname}
      />
    </>
  );
}
