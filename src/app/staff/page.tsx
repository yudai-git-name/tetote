import FvSub from '../_components/layouts/fv/sub/FvSub';
import Breadcrumb from '../_components/layouts/breadcrumb/Breadcrumb';
import CardStaff from '@/app/_components/elements/card/staff/CardStaff';
import Cta from '../_components/layouts/cta/Cta';
import styles from './Staff.module.css';
import clsx from 'clsx';
import { getStaffList } from '@/app/_libs/microcms/staff';

export default async function Page() {
  const data = await getStaffList();

  const breadcrumbItems = [{ text: 'TOP', href: '/' }, { text: 'STAFF' }];

  return (
    <main className="main__sub">
      <FvSub
        titleEn="STAFF"
        titleJa="社員について"
        introduction="弊社社員のリアルな声を紹介しています。"
        src="/image/index/fv/fv_sub02.jpg"
        alt="staff"
      />
      <Breadcrumb items={breadcrumbItems} />
      <section className={styles.staff}>
        <div className={clsx(styles.inner, 'innerPrimary')}>
          <div className={styles.content}>
            <div className={styles.boxes}>
              {data.contents.map((item) => (
                <div key={item.id} className={styles.box}>
                  <CardStaff
                    item={{
                      slug: item.id,
                      name: item.name,
                      position: item.position,
                      entry: item.entry,
                      message01: item.message_top,
                      message02: item.message_bottom,
                      image: {
                        src: item.thumbnail.url,
                        width: item.thumbnail.width ?? 312, // fallback value
                        height: item.thumbnail.height ?? 395, // fallback value
                        alt: item.name,
                      },
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
}
