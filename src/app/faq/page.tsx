import FvSub from '../_components/layouts/fv/sub/FvSub';
import Breadcrumb from '../_components/layouts/breadcrumb/Breadcrumb';
import Faq from './sections/faq/Faq';
import Cta from '../_components/layouts/cta/Cta';

export default function Page() {
  const breadcrumbItems = [{ text: 'TOP', href: '/' }, { text: 'FAQ' }];

  return (
    <main className="main__sub">
      <FvSub
        titleEn="FAQ"
        titleJa="よくある質問"
        introduction="皆様からよく頂くご質問にお答えします。"
        src="/image/index/fv/fv_sub06.png"
        alt="faq"
      />
      <Breadcrumb items={breadcrumbItems} bgSecond={true} />
			<Faq />
      <Cta />
    </main>
  );
}
