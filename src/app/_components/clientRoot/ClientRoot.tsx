'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // ← ✅ 追加
import Header from '@/app/_components/layouts/header/Header';
import DrawerMenu from '@/app/_components/layouts/drawer/drawerMenu/DrawerMenu';
import Footer from '@/app/_components/layouts/footer/Footer';

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname(); // ✅ 現在のパスを取得

  // ✅ メニューの開閉切り替え
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  // ✅ ページ遷移したらメニューを閉じる
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  // ✅ メニューが開いてるときは背景スクロール禁止
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isDrawerOpen]);

  return (
    <>
      <Header toggleDrawer={toggleDrawer} isOpen={isDrawerOpen} />
      <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      {children}
      <Footer />
    </>
  );
}
