// src/app/blog/p/[current]/page.tsx
import { getBlogList } from '@/app/_libs/microcms/blog';
import Pagination from '@/app/_components/layouts/pagination/Pagination';
import FvSub from '@/app/_components/layouts/fv/sub/FvSub';
import Breadcrumb from '@/app/_components/layouts/breadcrumb/Breadcrumb';
import CardBlog from '@/app/_components/elements/card/blog/CardBlog';
import Cta from '@/app/_components/layouts/cta/Cta';
import styles from '../../Blog.module.css';
import clsx from 'clsx';
import { notFound } from 'next/navigation';
import { formatBlogItems } from '@/app/data/blog/blogItem';

const PER_PAGE = 8;

type Props = {
  params: {
    current: string;
  };
};

export default async function BlogPage({ params }: Props) {
  const currentPage = Number(params.current);

  if (isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const offset = (currentPage - 1) * PER_PAGE;

  const data = await getBlogList({
    limit: PER_PAGE,
    queries: {
      offset,
      orders: 'sortOrder',
    },
  });

  if (data.contents.length === 0) {
    notFound();
  }

  const totalCount = data.totalCount;
  const totalPages = Math.ceil(totalCount / PER_PAGE);

  const blogItems = formatBlogItems(data.contents);

  return (
    <main className="main__sub">
      <FvSub
        titleEn="BLOG"
        titleJa="採用ブログ"
        introduction="採用情報やイベント情報などをご紹介します。"
        src="/image/index/fv/fv_sub03.png"
        alt="blog"
      />
      <Breadcrumb
        items={[
          { text: 'TOP', href: '/' },
          { text: 'BLOG', href: '/blog' },
        ]}
        bgSecond
      />

      <section className={styles.blog}>
        <div className={clsx(styles.inner, 'innerPrimary')}>
          <div className={styles.content}>
            <div className={styles.boxes}>
              <CardBlog items={blogItems} isBg={false} />
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} />
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
