import clsx from 'clsx';
import styles from './Message.module.css';
import Image from 'next/image';

export default function Message() {
  return (
    <>
      <section className={styles.message}>
        <div className={clsx(styles.inner, 'innerTertiary')}>
          <div className={styles.head}>
            <h2 className={styles.heading2}>代表メッセージ</h2>
            <div className={styles.content}>
              <div className={styles.ceo}>
                <div className={styles.ceoBody}>
                  <div className={styles.ceoBodyHead}>
                    <h3 className={styles.heading3}>
                      あなたがやりたいこと
                      <br />
                      それを全力でサポートできる、
                      <br />
                      それがTETOTEの強みです。
                    </h3>
                  </div>
                  <div className={styles.ceoBodyTexts}>
                    <p className={styles.ceoBodyText}>
                      TETOTEは、ITコンサルティングとコンサル導入企業への営業を専門とする会社です。設立以来、私たちは「お客様の課題解決に真摯に取り組み、共に成長する」という理念を掲げ、お客様とパートナーと共に歩んできました。
                    </p>
                    <p className={styles.ceoBodyText}>
                      お客様のニーズを深く理解し、最適なソリューションを提供することで、数多くの課題解決を支援してきました。その結果、お客様との深い信頼関係を築き、共に成長することができています。
                    </p>
                    <p className={styles.ceoBodyText}>
                      TETOTEは、個々の能力や個性を尊重し、多様な人材が活躍できる環境づくりに力を入れています。年齢、性別、国籍、経験などに関係なく、意欲と向上心のある人材を歓迎します。
                    </p>
                    <p className={styles.ceoBodyText}>
                      私たちと共に、未来を創造していきましょう。
                    </p>
                  </div>
                  <p className={styles.name}>
                    <Image
                      src={'/image/index/about/about_message-name.svg'}
                      width={185}
                      height={35}
                      alt="田中浩二郎"
                    />
                  </p>
                </div>
                <div className={styles.imageWrap}>
                  <Image
                    src={'/image/index/about/about_message-ceo.png'}
                    width={484}
                    height={629}
                    alt="田中浩二郎"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
