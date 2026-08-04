import { notFound } from 'next/navigation';
import Hero from '@/components/ui/Hero';
import CtaBand from '@/components/ui/CtaBand';
import { practiceAreas, getPracticeAreaBySlug } from '@/data/practiceAreas';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const area = getPracticeAreaBySlug(params.slug);
  if (!area) return { title: 'Practice Area Not Found | Lexmates' };

  return {
    title: `${area.title} | Lexmates Advocates & Legal Advisers`,
    description: area.metaDesc,
  };
}

export default function PracticeAreaDetailPage({ params }: PageProps) {
  const area = getPracticeAreaBySlug(params.slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <Hero
        small
        eyebrow="PRACTICE AREA"
        title={area.title}
        subtitle={area.heroSub}
      />

      <section className="section">
        <div className="container narrow">
          <div className="prose">
            {area.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Discuss Your ${area.title}`} />
    </>
  );
}
