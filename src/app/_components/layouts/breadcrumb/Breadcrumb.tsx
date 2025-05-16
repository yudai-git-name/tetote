import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import styles from './Breadcrumb.module.css';
import clsx from 'clsx';

type BreadcrumbItem = {
  text: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  bgSecond?: boolean;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, bgSecond }) => {

  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.text,
    item: item.href
      ? `${process.env.NEXT_PUBLIC_BASE_URL}${item.href}`
      : undefined,
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElement.filter((item) => item.item),
  };

  return (
    <nav aria-label="breadcrumb">
      <div className={clsx(styles.breadcrumb, bgSecond && styles.bgSecond)}>
        <ol className={clsx(styles.inner, 'innerPrimary')}>
          {items.map((item, index) => (
            <li key={index} className={styles.breadcrumbItem}>
              {item.href ? (
                <Link href={item.href} className={styles.breadcrumbItemLink}>
                  {item.text}
                </Link>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
};

export default Breadcrumb;
