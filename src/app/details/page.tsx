import FvSub from '../_components/layouts/fv/sub/FvSub';
import Breadcrumb from '../_components/layouts/breadcrumb/Breadcrumb';
import Details from './sections/details/Details';
import Cta from '../_components/layouts/cta/Cta';

export default function Page() {
  const breadcrumbItems = [{ text: 'TOP', href: '/' }, { text: 'DETAILS' }];

  return (
    <main className="main__sub">
      <FvSub
        titleEn="DETAILS"
        titleJa="募集要項"
        introduction="TETOTEは幅広く仲間を募集しています。"
        src="/image/index/fv/fv_sub05.png"
        alt="details"
      />
      <Breadcrumb items={breadcrumbItems} bgSecond={true} />
			<Details />
      <Cta />
    </main>
  );
}
