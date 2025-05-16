export type businessItem = {
  title: string;
  subTitle: string;
  text01: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const businessItems: businessItem[] = [
  {
    title: 'コンサルティング事業',
    subTitle: 'お客様と伴走し、売上に直接貢献できる',
    text01:
      '営業との連携で、人と組織の成長・変革に向けた計画立案・サービス実施、さらにフォローまで。コンサルタントとして一気通貫で携わります。',
    image: {
      src: '/image/index/about/about_business01.png',
      width: 457,
      height: 261,
      alt: '自信に満ちた表情で腕を組む女性ビジネスパーソン、明るいオフィスで撮影されたポートレート写真',
    },
  },
  {
    title: 'ソリューション営業事業',
    subTitle: 'お客様の課題を見つけ出し、必要な施策を提案する',
    text01:
      'お客様が抱える課題へ、ヒアリングベースで提案型営業を行い、コンサルタントとの連携で課題解決を目指します。',
    image: {
      src: '/image/index/about/about_business02.png',
      width: 457,
      height: 261,
      alt: '明るいオフィスでノートパソコンを操作するスーツ姿の男性ビジネスパーソン',
    },
  },
  {
    title: '業務系システム開発事業',
    subTitle: 'お客様の課題を見つけ出し、必要な施策を提案する',
    text01: 'お客様の課題解決を強力にサポートするシステムを設計する',
    image: {
      src: '/image/index/about/about_business03.png',
      width: 457,
      height: 261,
      alt: 'デュアルモニターで作業する女性エンジニアまたはオフィスワーカーの背面写真',
    },
  },
];
