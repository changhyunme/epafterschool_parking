import Layout from "@/components/ui/Layout";
import Logo from "@/components/ui/Logo";
import Card from "@/components/ui/Card";
import MainPageButtonArea from "@/components/partials/MainPageButtonArea";

export default function Home() {
  return (
    <Layout>
      <Logo />
      <Card>
        지금까지 구립은평마을방과후지원센터를 이용해주셔서 감사합니다. <br />
        구립은평마을방과후지원센터는 ㅇㅇㅇ로 통합되며, 관련사업은 ㅇㅇㅇ로 이관됩니다. <br />
        지금까지 이용해주셔서 감사드리며, ㅇㅇㅇ하도록 하겠습니다. 감사합니다.
      </Card>
      <MainPageButtonArea />
    </Layout>
  );
}
