import FvSub from '../_components/layouts/fv/sub/FvSub';
import Breadcrumb from '../_components/layouts/breadcrumb/Breadcrumb';
import Important from './sections/important/Important';
import Message from './sections/message/Message';
import Business from './sections/business/Business';
import Company from './sections/company/Company';
import Cta from '../_components/layouts/cta/Cta';

export default function Page() {
  const breadcrumbItems = [{ text: 'TOP', href: '/' }, { text: 'ABOUT US' }];

  return (
    <main className="main__sub">
      <FvSub
        titleEn="ABOUT US"
        titleJa="TETOTEについて"
        introduction="私たちの理念を紹介をします。"
        src="/image/index/fv/fv_sub01.jpg"
        alt="モダンで開放的なオフィス空間、中央の共有テーブルで作業する社員たちと周囲のデスクブース"
      />
      <Breadcrumb items={breadcrumbItems} />
      <Important />
      <Message />
      <Business />
      <Company />
      <Cta />
    </main>
  );
}

