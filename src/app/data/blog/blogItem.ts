import { format } from 'date-fns';

type RawBlogItem = {
  id: string;
  title: string;
  publishedAt?: string;
  category?: {
    id: string;
    name: string;
  };
  thumbnail?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
};

type FormattedBlogItem = {
  id: string;
  title: string;
  publishedAt: string;
  category: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export function formatBlogItems(contents: RawBlogItem[]): FormattedBlogItem[] {
  return contents.map((item) => ({
    id: item.id,
    title: item.title,
    publishedAt: item.publishedAt
      ? format(new Date(item.publishedAt), 'yyyy.MM.dd')
      : '日付未定',
    category: item.category?.name ?? 'カテゴリなし',
    image: {
      src: item.thumbnail?.url ?? '/image/index/blog/blog_image.jpg',
      width: item.thumbnail?.width ?? 156,
      height: item.thumbnail?.height ?? 180,
      alt: item.thumbnail?.alt ?? 'ブログ画像',
    },
  }));
}
