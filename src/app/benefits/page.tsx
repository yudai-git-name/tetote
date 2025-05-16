import FvSub from '../_components/layouts/fv/sub/FvSub';
import Breadcrumb from '../_components/layouts/breadcrumb/Breadcrumb';
import System from './sections/system/System';
import Voice from './sections/voice/Voice';
import Cta from '../_components/layouts/cta/Cta';


export default function Page() {
  const breadcrumbItems = [{ text: 'TOP', href: '/' }, { text: 'BENEFITS' }];

  return (
    <main className="main__sub">
      <FvSub
        titleEn="BENEFITS"
        titleJa="福利厚生について"
        introduction="充実した福利厚生制度を設けています。"
        src="/image/index/fv/fv_sub03.png"
        alt="観葉植物に囲まれた明るく開放的なオフィス空間、デスクには複数のパソコンが並ぶ"
      />
      <Breadcrumb items={breadcrumbItems} bgSecond={true} />
      <System />
      <Voice />
      <Cta />
    </main>
  );
}
