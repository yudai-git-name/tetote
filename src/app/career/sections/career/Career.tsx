import React from 'react';
import styles from './Career.module.css';
import clsx from 'clsx';
import Image from 'next/image';

export type careerTrainingItem = {
	title: string;
	text01: string;
}

export const careerTrainingItems: careerTrainingItem[] = [
  {
    title: '1. ケーススタディ研修',
    text01:
      'TETOTEの過去のプロジェクト事例を基にしたケーススタディ研修を実施しています。\nこの研修では、実際のプロジェクトで直面する課題を解決するために、分析力、問題解決能力、プレゼンテーション能力などを実践的に習得することができます。',
  },
  {
    title: '2. クライアント対応研修',
    text01:
      'TETOTE は、クライアントとの信頼関係構築を重視しています。\nこの研修では、クライアントとのコミュニケーションスキル、交渉スキル、プレゼンテーションスキルなどを習得し、クライアントの課題解決に貢献できるコンサルタントを育成します。',
  },
  {
    title: '3. 専門知識研修',
    text01:
      '財務、会計、ITなど、コンサルタント業務に必要な専門知識を習得するための研修を実施しています。\nTETOTE は、幅広い分野の知識を持つコンサルタントを育成し、クライアントに最適なソリューションを提供できるようにしています。',
  },
  {
    title: '4. マネジメント研修',
    text01:
      'プロジェクトマネジメント、リーダーシップ、チームビルディングなど、マネジメントスキルを習得するための研修を実施しています。\nTETOTE は、将来的にマネジメント層を担うコンサルタントを育成し、組織全体の成長を促進しています。',
  },
  {
    title: '5. 外部研修',
    text01:
      '社外で実施される研修にも積極的に参加することができます。\nTETOTE は、最新の知識やスキルを習得し、常に成長し続けるコンサルタントを育成します。',
  },
];

export default function Career() {
  return (
    <>
      <section className={styles.career}>
        <div className={clsx(styles.inner, 'innerTertiary')}>
          <div className={styles.head}>
            <h2 className={styles.heading2}>
              キャリアパスに沿った研修制度を用意
            </h2>
          </div>
          <div className={styles.diagrams}>
            <p className={styles.diagramsText}>
              弊社では、コンサルタントのキャリアパスを、大きく4つのステージに分けています。
            </p>
            <p className={styles.diagramsText}>
              TETOTE
              は、コンサルタントのキャリアパスを支えるために、以下の独自の研修制度を設けています。
            </p>
            <div className={styles.imageWrap}>
              <Image
                src={'/image/index/career/career_diagrams.svg'}
                width={980}
                height={734}
                alt="キャリアパスや職種構成を図解したフローチャート形式のイラスト"
              />
            </div>
          </div>
          <div className={styles.training}>
            <ul className={styles.boxes}>
              {careerTrainingItems.map((item, index) => (
                <li key={index} className={styles.box}>
                  <h3 className={styles.heading3}>{item.title}</h3>
                  <div className={styles.body}>
                    <div className={styles.textWrap}>
                      <p className={styles.text}>
                        {' '}
                        {item.text01.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
