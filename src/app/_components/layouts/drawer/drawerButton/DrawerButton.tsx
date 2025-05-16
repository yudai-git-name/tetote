'use client';

import styles from './DrawerButton.module.css';
import clsx from 'clsx';

type Props = {
  onClick: () => void;
  isOpen: boolean;
  isAtAbout: boolean;
  pathname: string;
};

export default function DrawerButton({
  onClick,
  isOpen,
  isAtAbout,
  pathname,
}: Props) {
  const isBlack = pathname !== '/' || isAtAbout;

  return (
    <button
      className={clsx(styles.drawerButton, { [styles.open]: isOpen })}
      onClick={onClick}
      aria-label="メニューを開く"
    >
      <span
        className={clsx(styles.bar, {
          [styles.subPageBar]: isBlack,
        })}
      ></span>
      <span
        className={clsx(styles.barText, {
          [styles.subPageColor]: isBlack,
        })}
      >
        MENU
      </span>
    </button>
  );
}
