import Breadcrumb from '@/app/_components/layouts/breadcrumb/Breadcrumb';
import Cta from '@/app/_components/layouts/cta/Cta';
import styles from './Blogdetail.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { format } from 'date-fns';
import { getBlogDetail, getBlogList } from '@/app/_libs/microcms/blog';
import { notFound } from 'next/navigation';



	export default async function Page({
		params,
	}: {
		params: { slug: string };
	}) {
		const data = await getBlogDetail(params.slug);
		if (!data) notFound();

  // 全記事一覧取得（publishedAt順）で前後記事を特定
  const allData = await getBlogList({
    queries: {
      orders: 'publishedAt',
      limit: 100, // microCMSの上限は最大1000件
    },
  });

  const currentIndex = allData.contents.findIndex(
    (item) => item.id === params.slug
  );
  const prevPost = allData.contents[currentIndex - 1];
  const nextPost = allData.contents[currentIndex + 1];

  const breadcrumbItems = [
    { text: 'TOP', href: '/' },
    { text: 'BLOG', href: '/blog' },
    { text: data.title },
  ];

  return (
    <main className="main__sub --bgSecond">
      <Breadcrumb items={breadcrumbItems} bgSecond={true} />

      <article className={styles.blogDetail}>
        <div className={clsx(styles.inner, 'innerQuaternary')}>
          <div className={styles.head}>
            <h1 className={styles.heading1}>{data.title}</h1>
            <div className={styles.categoryWrap}>
              {data.category?.name && (
                <p className={styles.category}>{data.category.name}</p>
              )}
              <time dateTime={data.publishedAt} className={styles.date}>
                {data.publishedAt
                  ? format(new Date(data.publishedAt), 'yyyy.MM.dd')
                  : '日付未定'}
              </time>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.body}>
              <div
                className={styles.wrap}
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
            </div>

            {data.image?.url && (
              <div className={styles.imageWrap}>
                <Image
                  src={data.image.url}
                  width={data.image.width}
                  height={data.image.height}
                  alt={data.image.alt ?? 'ブログ画像'}
                />
              </div>
            )}
          </div>
        </div>
      </article>

      {/* ✅ 前後記事表示部分 */}
      <div className={styles.buttons}>
        {prevPost && (
          <div className={styles.button}>
            <Link href={`/blog/${prevPost.id}`} className={styles.buttonLink}>
              <div className={styles.buttonLinkInner}>
                <IoIosArrowDropleft
                  className={clsx(styles.icon, styles.iconLeft)}
                />
                <p className={styles.title}>{prevPost.title}</p>
                {prevPost?.publishedAt && (
                  <time className={styles.date}>
                    {format(new Date(prevPost.publishedAt), 'yyyy.MM.dd')}
                  </time>
                )}
              </div>
            </Link>
          </div>
        )}
        {nextPost && (
          <div className={styles.button}>
            <Link href={`/blog/${nextPost.id}`} className={styles.buttonLink}>
              <div className={styles.buttonLinkInner}>
                <IoIosArrowDropright
                  className={clsx(styles.icon, styles.iconRight)}
                />
                <p className={styles.title}>{nextPost.title}</p>
                {nextPost?.publishedAt && (
                  <time className={styles.date}>
                    {format(new Date(nextPost.publishedAt), 'yyyy.MM.dd')}
                  </time>
                )}
              </div>
            </Link>
          </div>
        )}
      </div>

      <Cta />
    </main>
  );
}
