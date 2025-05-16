import type { Metadata } from 'next';
import { Noto_Sans_JP, Viga, Poppins } from 'next/font/google';
import 'destyle.css';
import './styles/_index.css';
import ClientRoot from './_components/clientRoot/ClientRoot';

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--fontNotoSansJp',
  display: 'swap',
});

const viga = Viga({
  weight: '400',
  subsets: ['latin'],
  variable: '--fontViga',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--fontPoppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '採用特設サイト | 株式会社TETOTE',
  description:
    'テクノロジーで社会課題を解決する。AIやビッグデータ分析などの技術を活用した社会課題解決サービスを提供するTETOTEの採用サイト。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${viga.variable} ${poppins.variable}`}
      >
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
