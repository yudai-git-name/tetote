import { createClient } from 'microcms-js-sdk';

import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from 'microcms-js-sdk';

export type blog = {
  title: string;
  thumbnail: MicroCMSImage;
  content: string;
  image: MicroCMSImage;
  category?: {
    id: string;
    name: string;
  };
} & MicroCMSListContent;



if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error('NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error('NEXT_PUBLIC_MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY as string,
});

// ✅ ブログ一覧を取得（順番制御つき）
export const getBlogList = async ({
  limit = 10,
  queries = {},
}: { limit?: number; queries?: MicroCMSQueries } = {}) => {
  return await client.getList<blog>({
    endpoint: 'blog',
    queries: {
      depth: 2, // ✅ カテゴリの中身（nameなど）を取得するために必要
      limit,
      ...queries,
    },
  });
};

// ✅ ブログ詳細記事の取得
export const getBlogDetail = async (slug: string) => {
  const detail = await client.getListDetail<blog>({
    endpoint: 'blog',
    contentId: slug,
    queries: {
      depth: 2, // ← これを追加
    },
  });
  return detail;
};

