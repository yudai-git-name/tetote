// src/app/blog/page.tsx
import FvSub from '@/app/_components/layouts/fv/sub/FvSub';
import Breadcrumb from '@/app/_components/layouts/breadcrumb/Breadcrumb';
import Cta from '@/app/_components/layouts/cta/Cta';
import styles from './Blog.module.css';
import clsx from 'clsx';
import CardBlog from '@/app/_components/elements/card/blog/CardBlog';
import { getBlogList } from '@/app/_libs/microcms/blog';
import Pagination from '../_components/layouts/pagination/Pagination';
import { formatBlogItems } from '@/app/data/blog/blogItem';

const PER_PAGE = 8;

export default async function Page() {
  const currentPage = 1;

  const data = await getBlogList({
    limit: PER_PAGE,
    queries: { offset: 0, orders: 'sortOrder' },
  });

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
        alt="観葉植物に囲まれた明るく開放的なオフィス空間、デスクには複数のパソコンが並ぶ"
      />
      <Breadcrumb
        items={[{ text: 'TOP', href: '/' }, { text: 'BLOG' }]}
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
