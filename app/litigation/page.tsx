import Link from 'next/link';
import Hero from '@/components/ui/Hero';
import CtaBand from '@/components/ui/CtaBand';

export const metadata = {
  title: 'Litigation | Lexmates Advocates & Legal Advisers',
  description:
    'Lexmates’ litigation team represents clients before every level of civil and commercial courts, tribunals, and appellate forums in Bangladesh.',
};

export default function LitigationPage() {
  const features = [
    {
      title: 'Court & Tribunal Representation',
      desc: 'We appear before every level of civil and commercial courts, statutory tribunals, and appellate forums, prepared and present at every stage of your matter.',
    },
    {
      title: 'Strategic Case Architecture',
      desc: 'We do not wait and react. From day one, we build a litigation strategy around your case, anticipating the other side and positioning you for the strongest possible outcome.',
    },
    {
      title: 'Civil & Commercial Disputes',
      desc: 'Contracts, property, torts, injunctions, recovery proceedings. Across the full spectrum of civil litigation, we protect what is rightfully yours.',
    },
    {
      title: 'Effective Advocacy',
      desc: 'Every argument is crafted with purpose. Every submission is delivered with authority. Our advocacy is disciplined, focused, and built to persuade, not just to participate.',
    },
  ];

  return (
    <>
      <Hero
        eyebrow="LITIGATION"
        title={
          <>
            Litigation Is Not Just a Service.
            <br />
            It Is Who We Are.
          </>
        }
        subtitle="Our litigators know the courtroom inside out, from procedural strategy to the fine art of building arguments that hold up under the toughest judicial scrutiny. We do not just show up. We come prepared to win."
      >
        <Link href="/contact" className="btn btn-primary">
          Talk to a Litigator
        </Link>
      </Hero>

      <section className="section">
        <div className="container narrow">
          <div className="prose">
            <p>
              Every dispute carries a story behind it. A business seeking certainty. A person fighting for their rights. A deal gone wrong. We understand what is really at stake, and we carry that understanding into every proceeding, every hearing, every argument we make.
            </p>
            <p>
              From the first notice to the final decree, we build your case with precision. We anticipate the other side, close the gaps before they can be exploited, and pursue your interests without compromise.
            </p>
            <p>
              When you step into a courtroom with Lexmates, you step in with a team that fights like it is their own case.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow center">WHAT WE BRING</p>
          <div className="feature-grid">
            {features.map((item, i) => (
              <div className="feature-card" key={i}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pullquote">
        <div className="container narrow">
          <blockquote style={{ fontFamily: 'var(--serif)' }}>
            &ldquo;When the dispute is complex and the stakes are real, you need counsel that is strategic, prepared, and completely on your side.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="prose">
            <p>
              Lexmates has spent years representing individuals, businesses, and institutions in disputes that matter. Our litigation team is built for complexity, and for the kind of tenacious, high-quality advocacy that turns difficult cases into favorable outcomes.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Whether you are an individual, a growing business, or an established enterprise, we stand by you at every step." />
    </>
  );
}
