import { Hero } from '@/components/sections/hero';
import { CategoriesSection } from '@/components/sections/categories';

import { EditorialBanner } from '@/components/sections/editorial';
import { BrandsSection } from '@/components/sections/brands';

export default function Home() {
  return (
    <>
      <Hero />

      <CategoriesSection />

      

      <EditorialBanner />

      <BrandsSection />
    </>
  );
}