import { createClient } from 'microcms-js-sdk';

import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from 'microcms-js-sdk';

export type Staff = {
  name: string;
  position: string;
  entry: string;
  message_top: string;
  message_bottom: string;
  thumbnail: MicroCMSImage;
  firstView: MicroCMSImage;
  selfIntroduction: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textQuaternary: string;
  textQuinary: string;
  textSenary: string;
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

// ✅ スタッフ一覧を取得する関数
export const getStaffList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Staff>({
    endpoint: 'staff',
    queries,
  });
  return listData;
};

// ✅ スタッフ詳細記事の取得
export const getStaffDetail = async (slug: string) => {
  const detail = await client.getListDetail<Staff>({
    endpoint: 'staff',
    contentId: slug,
  });
  return detail;
};
