'use client';

import { useEffect, useState } from 'react';
import styles from '@/app/staff/[slug]/StaffDetail.module.css';

type Props = {
  sections: [string, string][];
};

export default function SidebarStaff({ sections }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(`section-${i}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveIndex(i);
            return;
          }
        }
      }
      setActiveIndex(null);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初回実行

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarInner}>
        <p className={styles.sidebarTitle}>目次</p>
        <ul className={styles.sidebarItems}>
          {sections.map(([title], index) => (
            <li
              key={index}
              id={`sidebar-button-${index}`}
              className={styles.sidebarItem}
              style={{
                color: activeIndex === index ? '#222' : '#999',
                fontWeight: activeIndex === index ? '700' : '400',
              }}
            >
              ・{title}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
