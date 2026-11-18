import Hero from '@/components/home/Hero';
import Pilares from '@/components/home/Pilares';
import MemoriaDivider from '@/components/MemoriaDivider';
import StatsBand from '@/components/home/StatsBand';
import Atalhos from '@/components/home/Atalhos';
import CtaVoz from '@/components/home/CtaVoz';

export default function Home() {
  return (
    <>
      <Hero />
      <MemoriaDivider />
      <Pilares />
      <StatsBand />
      <Atalhos />
      <CtaVoz />
    </>
  );
}
