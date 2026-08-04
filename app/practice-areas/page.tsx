import Hero from '@/components/ui/Hero';
import PracticeCard from '@/components/ui/PracticeCard';
import CtaBand from '@/components/ui/CtaBand';
import { practiceAreas } from '@/data/practiceAreas';

export const metadata = {
  title: 'Practice Areas | Lexmates Advocates & Legal Advisers',
  description:
    'Explore Lexmates’ full range of practice areas, from civil litigation to company law, tax, immigration, and family matters.',
};

export default function PracticeAreasPage() {
  return (
    <>
      <Hero
        small
        title="Practice Areas"
        subtitle="40 distinct practice areas. One firm. Explore how Lexmates can help."
      />

      <section className="section">
        <div className="container">
          <div className="area-grid area-grid-wide">
            {practiceAreas.map((area) => (
              <PracticeCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Whether you are an individual, a growing business, or an established enterprise, we stand by you at every step." />
    </>
  );
}
