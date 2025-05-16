export type benefitsItem = {
  title: string;
  titleEn: string;
  text: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const benefitsItems: benefitsItem[] = [
  {
    title: '研修制度とキャリアパス',
    titleEn: 'Traning And Career',
    text: '個々の目標に合わせたキャリアパスを支える、豊富な研修メニューで、あなた自身の成長を強力にサポートします。',
    image: {
      src: '/image/index/benefits/benefits_home-career.png',
      width: 327,
      height: 277,
      alt: 'オフィスでタスクを共有する3人のビジネスパーソンのイラスト、チェックリストとデスクが描かれている',
    },
  },
  {
    title: '福利厚生',
    titleEn: 'Employee Benefits',
    text: 'TETOTEの福利厚生制度は、従業員の健康と幸福を重視し、働きやすい環境を提供することを目的としています。',
    image: {
      src: '/image/index/benefits/benefits_home-welfare.png',
      width: 344,
      height: 230,
      alt: '建物の窓からそれぞれの部屋でくつろぐ人々を描いたイラスト、心地よい生活環境を表現',
    },
  },
];
