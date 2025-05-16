import FvSub from '../_components/layouts/fv/sub/FvSub';
import Breadcrumb from '../_components/layouts/breadcrumb/Breadcrumb';
import Career from './sections/career/Career';
import Cta from '../_components/layouts/cta/Cta';

export default function Page() {
  const breadcrumbItems = [{ text: 'TOP', href: '/' }, { text: 'CAREER' }];

  return (
    <main className="main__sub">
      <FvSub
        titleEn="CAREER"
        titleJa="研修制度とキャリアパス"
        introduction="キャリアパスを支える充実した、研修制度"
        src="/image/index/fv/fv_sub04.png"
        alt="大きな窓から都市の景色が見える高層階の会議室、長机と複数の椅子、観葉植物が配置されている"
      />
      <Breadcrumb items={breadcrumbItems} bgSecond={true} />
      <Career />
      <Cta />
    </main>
  );
}
