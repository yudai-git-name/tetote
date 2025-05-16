// src/app/staff/[slug]/page.tsx
import Breadcrumb from '@/app/_components/layouts/breadcrumb/Breadcrumb';
import Cta from '@/app/_components/layouts/cta/Cta';
import styles from './StaffDetail.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import CardStaff from '@/app/_components/elements/card/staff/CardStaff';
import { getStaffDetail, getStaffList } from '@/app/_libs/microcms/staff';
import SidebarStaff from '@/app/_components/layouts/sidebar/SidebarStaff';

type PageProps = {
  params: { slug: string };
};

export default async function Page({ params }: PageProps) {
  const data = await getStaffDetail(params.slug);
  const otherData = await getStaffList();

  const sections = [
    ['普段の業務内容について', data.textPrimary],
    ['学生時代に力を入れたことは？', data.textSecondary],
    ['TETOTEを志望した理由は？', data.textTertiary],
    ['やりがいを感じる瞬間は？', data.textQuaternary],
    ['どんな人と一緒に働きたい？', data.textQuinary],
    ['応募者へのメッセージ', data.textSenary],
  ] as [string, string][];
  const breadcrumbItems = [
    { text: 'TOP', href: '/' },
    { text: 'STAFF', href: '/staff' },
    { text: data.name },
  ];

  return (
    <main className="main__sub">
      <article className={styles.staffDetail}>
        <div className={styles.fv}>
          <div className={clsx(styles.fvInner, 'innerPrimary')}>
            <div className={styles.fvContent}>
              <div className={styles.fvBody}>
                <hgroup className={styles.fvBodyHead}>
                  <h2 className={styles.fvBodyHeadHeading2}>
                    {data.message_top}
                  </h2>
                  <p className={styles.fvBodyHeadSubTitle}>
                    {data.message_bottom}
                  </p>
                </hgroup>
                <div className={styles.aboutMe}>
                  <div className={styles.aboutMeWrap}>
                    <h1 className={styles.aboutMeHeading1}>{data.name}</h1>
                    <p className={styles.aboutMeEntry}>{data.entry}</p>
                  </div>
                  <p className={styles.aboutMePosition}>{data.position}</p>
                  <p className={styles.aboutMeSelfIntroduction}>
                    {data.selfIntroduction}
                  </p>
                </div>
              </div>
              <div className={styles.fvImageWrap}>
                <Image
                  className={styles.fvImage}
                  src={data.firstView.url}
                  width={data.firstView.width ?? 286}
                  height={data.firstView.height ?? 368}
                  alt={data.name}
                />
              </div>
            </div>
          </div>
        </div>

        <Breadcrumb items={breadcrumbItems} bgSecond={true} />

        <section className={styles.staffDetailContent}>
          <div className={clsx(styles.staffDetailContentInner, 'innerPrimary')}>
            <div className={styles.items}>
              {sections.map(([title, text], index) => (
                <div
                  key={index}
                  className={styles.item}
                  id={`section-${index}`}
                >
                  <h2 className={styles.heading2}>{title}</h2>
                  <p className={styles.text}>{text}</p>
                </div>
              ))}
            </div>
            <SidebarStaff sections={sections} />
          </div>
        </section>
      </article>

      <div className={styles.othersStaff}>
        <div className={clsx(styles.othersStaffInner, 'innerPrimary')}>
          <div className={styles.othersStaffHead}>
            <h2 className={styles.othersStaffHeadHeading2}>その他のメンバー</h2>
          </div>
          <div className={styles.othersStaffContent}>
            <div className={styles.othersStaffBoxes}>
              {otherData.contents
                .filter((item) => item.id !== data.id)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
                .map((item) => (
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
                          width: item.thumbnail.width ?? 312,
                          height: item.thumbnail.height ?? 395,
                          alt: item.name,
                        },
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </main>
  );
}
