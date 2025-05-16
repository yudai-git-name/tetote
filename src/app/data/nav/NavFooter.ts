import { MdOutlineFacebook } from 'react-icons/md';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import type { ComponentType } from 'react';

export type navItem = {
  href: string;
  label: string;
};

export const navItems: navItem[] = [
  { href: '/', label: 'ホーム' },
  { href: '/about', label: 'TETOTEについて' },
  { href: '/staff', label: '人を知る' },
  { href: '/career', label: '研修制度とキャリアパス' },
  { href: '/benefits', label: '福利厚生' },
  { href: '/blog', label: '採用ブログ' },
  { href: '/details', label: '募集要項' },
  { href: '/faq', label: 'よくある質問' },
  { href: '/about', label: '会社概要' },
];

export type snsItem = {
  href: string;
  icon: ComponentType;
};

export const snsItems: snsItem[] = [
  { href: 'https://www.facebook.com/', icon: MdOutlineFacebook },
  { href: 'https://x.com/', icon: AiFillTwitterCircle },
  { href: 'https://www.youtube.com/', icon: FaYoutube },
];
