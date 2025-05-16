'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { errorMessages } from '@/app/data/entry/ErrorMessage';

import styles from './Entry.module.css';
import clsx from 'clsx';
import Breadcrumb from '../_components/layouts/breadcrumb/Breadcrumb';
import Cta from '../_components/layouts/cta/Cta';

type FormData = {
  name: string;
  kana: string;
  email: string;
  tel: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  pr: string;
  jobTypes: string[];
  howFound?: string[];
  privacy: boolean;
};

export default function Page() {
  const breadcrumbItems = [{ text: 'TOP', href: '/' }, { text: 'ENTRY' }];
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('送信データ:', data);
    router.push('/entry/thanks');
  };

  return (
    <main className="main__sub">
      <Breadcrumb items={breadcrumbItems} bgSecond={true} />
      <section className={styles.entry}>
        <div className={clsx(styles.inner, 'innerSenary')}>
          <div className={styles.head}>
            <hgroup className={styles.heading2}>
              <h2 className={styles.en}>ENTRY FORM</h2>
              <p className={styles.ja}>
                <span className={clsx(styles.spanColor, styles.anotherColor)}>
                  新卒・中途採用
                </span>
                <br />
                エントリーフォーム
              </p>
            </hgroup>
            <p className={styles.headText}>
              当社へ入社ご希望の方は、下記の送信フォームより送信して下さい。
              <br />
              <span className={styles.anotherColor}>※</span>
              は必須項目になります。
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* お名前 */}
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label htmlFor="name" className={styles.formFieldLabel}>
                        お名前
                      </label>
                      <span className={styles.anotherColor}>※</span>
                    </div>
                  </div>
                  <div className={styles.formFieldItem}>
                    <input
                      id="name"
                      type="text"
                      className={styles.inputText}
                      placeholder="例：山田太郎"
                      {...register('name', {
                        required: errorMessages.name.required,
                      })}
                    />
                    {errors.name && (
                      <p className={styles.error}>{errors.name.message}</p>
                    )}
                  </div>
                </div>

                {/* カナ */}
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label htmlFor="kana" className={styles.formFieldLabel}>
                        お名前カナ
                      </label>
                      <span className={styles.anotherColor}>※</span>
                    </div>
                  </div>
                  <div className={styles.formFieldItem}>
                    <input
                      id="kana"
                      type="text"
                      className={styles.inputText}
                      placeholder="例：ヤマダタロウ"
                      {...register('kana', {
                        required: errorMessages.kana.required,
                        pattern: {
                          value: /^[ァ-ンヴー\s　]+$/,
                          message: errorMessages.kana.pattern,
                        },
                      })}
                    />
                    {errors.kana && (
                      <p className={styles.error}>{errors.kana.message}</p>
                    )}
                  </div>
                </div>

                {/* メール */}
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label htmlFor="email" className={styles.formFieldLabel}>
                        メールアドレス
                      </label>
                      <span className={styles.anotherColor}>※</span>
                    </div>
                  </div>
                  <div className={styles.formFieldItem}>
                    <input
                      id="email"
                      type="email"
                      className={styles.inputText}
                      placeholder="例：tetote@gmail.com"
                      {...register('email', {
                        required: errorMessages.email.required,
                        pattern: {
                          value: /^[^@]+@[^@]+\.[^@]+$/,
                          message: errorMessages.email.pattern,
                        },
                      })}
                    />
                    {errors.email && (
                      <p className={styles.error}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* 電話番号 */}
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label htmlFor="tel" className={styles.formFieldLabel}>
                        電話番号
                      </label>
                      <span className={styles.anotherColor}>※</span>
                    </div>
                  </div>
                  <div className={styles.formFieldItem}>
                    <input
                      id="tel"
                      type="tel"
                      className={styles.inputText}
                      placeholder="例：00-0000-0000"
                      {...register('tel', {
                        required: errorMessages.tel.required,
                      })}
                    />
                    {errors.tel && (
                      <p className={styles.error}>{errors.tel.message}</p>
                    )}
                  </div>
                </div>

                {/* 生年月日 */}
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label className={styles.formFieldLabel}>生年月日</label>
                      <span className={styles.anotherColor}>※</span>
                    </div>
                  </div>
                  <div className={styles.dateOfBirth}>
                    <div className={clsx(styles.formFieldItem, styles.year)}>
                      <input
                        type="number"
                        id="birth-year"
                        className={styles.inputDateOfBirth}
                        placeholder="例：2000"
                        {...register('birthYear', {
                          required: errorMessages.birthYear.required,
                        })}
                      />
                    </div>
                    <div
                      className={clsx(
                        styles.formFieldItem,
                        styles.formFieldItemDateOfBirth,
                        styles.moth
                      )}
                    >
                      <select
                        id="birth-month"
                        className={styles.inputDateOfBirth}
                        defaultValue=""
                        {...register('birthMonth', {
                          required: errorMessages.birthMonth.required,
                        })}
                      >
                        <option value="" disabled>
                          選択してください
                        </option>
                        {[...Array(12)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                      <span className={styles.DateOfBirthText}>月</span>
                      {(errors.birthYear ||
                        errors.birthMonth ||
                        errors.birthDay) && (
                        <p className={styles.error}>
                          生年月日を正しく入力してください
                        </p>
                      )}
                    </div>
                    <div
                      className={clsx(
                        styles.formFieldItem,
                        styles.formFieldItemDateOfBirth,
                        styles.day
                      )}
                    >
                      <select
                        id="birth-day"
                        className={styles.inputDateOfBirth}
                        defaultValue=""
                        {...register('birthDay', {
                          required: errorMessages.birthDay.required,
                        })}
                      >
                        <option value="" disabled>
                          選択してください
                        </option>
                        {[...Array(31)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                      <span className={styles.DateOfBirthText}>日</span>
                    </div>
                  </div>
                </div>

                {/* 希望職種 */}
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label className={styles.formFieldLabel}>希望職種</label>
                      <span className={styles.anotherColor}>※</span>
                    </div>
                  </div>
                  <div className={styles.formFieldItem}>
                    <div className={styles.formFieldRadios}>
                      {[
                        'コンサルタント',
                        'ソリューション営業',
                        'システムエンジニア',
                      ].map((job) => (
                        <label key={job} className={styles.formFieldRadio}>
                          <input
                            type="checkbox"
                            value={job}
                            {...register('jobTypes', {
                              validate: (v) =>
                                (v && v.length > 0) ||
                                errorMessages.jobTypes.required,
                            })}
                            className={styles.inputRadio}
                          />
                          <span className={styles.formFieldRadioText}>
                            {job}
                          </span>
                        </label>
                      ))}
                      {errors.jobTypes && (
                        <p className={styles.error}>
                          {errors.jobTypes.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 自己PR */}
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label htmlFor="pr" className={styles.formFieldLabel}>
                        自己PR
                      </label>
                      <span className={styles.anotherColor}>※</span>
                    </div>
                  </div>
                  <div className={styles.formFieldItem}>
                    <textarea
                      id="pr"
                      className={styles.inputTextArea}
                      placeholder="例：志望動機、自己PR"
                      {...register('pr', {
                        required: errorMessages.pr.required,
                      })}
                    />
                    {errors.pr && (
                      <p className={styles.error}>{errors.pr.message}</p>
                    )}
                  </div>
                </div>

                {/* 知ったきっかけ */}
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label className={styles.formFieldLabel}>
                        <span className={styles.formFieldLabelSmall}>
                          当社を知ったきっかけを教えて下さい。
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className={styles.formFieldItem}>
                    <div className={styles.formFieldRadios}>
                      {[
                        'X(旧Twitter)',
                        'Facebook',
                        'Instagram',
                        '検索広告',
                        '知人友人・親戚',
                        'その他',
                      ].map((source) => (
                        <label key={source} className={styles.formFieldRadio}>
                          <input
                            type="checkbox"
                            value={source}
                            {...register('howFound')}
                            className={styles.inputRadio}
                          />
                          <span className={styles.formFieldRadioText}>
                            {source}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* プライバシー同意 */}
                <div className={styles.privacy}>
                  <label className={styles.privacyCheckbox}>
                    <input
                      type="checkbox"
                      {...register('privacy', {
                        required: errorMessages.privacy.required,
                      })}
                      className={styles.inputCheckbox}
                    />
                    <span className={styles.privacyCheckboxText}>
                      個人情報保護方針に同意する
                    </span>
                  </label>
                  {errors.privacy && (
                    <p className={styles.error}>{errors.privacy.message}</p>
                  )}
                </div>

                {/* 送信 */}
                <div className={styles.button}>
                  <input
                    type="submit"
                    className={styles.inputSubmit}
                    value="送信する"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
}
