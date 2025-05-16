import styles from './Thanks.module.css';
import Breadcrumb from '@/app/_components/layouts/breadcrumb/Breadcrumb';
import Cta from '@/app/_components/layouts/cta/Cta';
import clsx from 'clsx';


export default function Page() {
	const breadcrumbItems = [{ text: 'TOP', href: '/' }, { text: 'ENTRY' }];

  return (
    <main className="main__sub">
      <Breadcrumb items={breadcrumbItems} bgSecond={true} />
      <div className={styles.thanks}>
        <div className={clsx(styles.inner, 'innerSenary')}>
          <p className={styles.title}>送信ありがとうございました。</p>
          <p className={styles.text}>
            3営業日以内に人事担当者より連絡させていただきます。
          </p>
        </div>
      </div>
      <Cta />
    </main>
  );
}
