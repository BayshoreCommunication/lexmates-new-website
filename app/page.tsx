import Link from 'next/link';
import Hero from '@/components/ui/Hero';
import StatCounters from '@/components/ui/StatCounters';
import PracticeCard from '@/components/ui/PracticeCard';
import PartnerCard from '@/components/ui/PartnerCard';
import CtaBand from '@/components/ui/CtaBand';
import { practiceAreas } from '@/data/practiceAreas';
import { partners } from '@/data/partners';
import { firmStats } from '@/data/stats';

export const metadata = {
  title: 'Home | Lexmates Advocates & Legal Advisers',
  description:
    'Lexmates is one of Dhaka’s most complete law firms, covering 40 practice areas across litigation and transactional law.',
};

export default function HomePage() {
  const featuredPracticeAreas = practiceAreas.slice(0, 8);

  return (
    <>
      <Hero
        light
        eyebrow="DHAKA, BANGLADESH"
        title={
          <>
            One Firm.
            <br />
            Every Legal Challenge.
          </>
        }
        subtitle="Lexmates is one of Dhaka’s most complete law firms — a single destination whether you are a multinational corporation navigating a complex transaction or an individual seeking justice in court."
      >
        <Link href="/contact" className="btn btn-primary">
          Book a Consultation
        </Link>
        <Link href="/practice-areas" className="btn btn-outline">
          View Practice Areas
        </Link>
      </Hero>

      <section className="section">
        <div className="container narrow reveal">
          <p className="eyebrow">WHO WE ARE</p>
          <h2>What Makes Us Different</h2>
          <div className="prose">
            <p>
              Our Litigation Division is at home in every forum, from the subordinate courts right up to the Supreme Court of Bangladesh. Meanwhile, our non-litigation teams handle the full spectrum of corporate, infrastructure, property and intellectual property matters with equal depth and precision.
            </p>
            <p>
              What makes us different is this rare symbiosis of seasoned litigators and transactional lawyers working side by side under one roof, covering 40 distinct practice areas, each led by advocates with the experience to make a real difference to your case.
            </p>
          </div>
        </div>
      </section>

      <StatCounters stats={firmStats} />

      <section className="section alt">
        <div className="container">
          <p className="eyebrow center">WHY LEXMATES</p>
          <h2 className="center">Two Things We Never Compromise On</h2>
          <div className="two-col reveal-stagger">
            <div className="col-card">
              <h3>Personalized Service</h3>
              <p>
                The law is never static. Legislation shifts, precedents evolve, and regulations are rewritten — often faster than most people realize. That is why having a lawyer who stays ahead of every change is not a luxury; it is a necessity.
              </p>
              <p>
                At Lexmates, we treat every client as unique. We listen carefully, understand the full picture and build a legal strategy around your specific needs.
              </p>
            </div>
            <div className="col-card">
              <h3>Highly Experienced</h3>
              <p>
                Experience is not just a credential at Lexmates, it is what we deliver for every client. Our attorneys bring over 16 years of hands-on legal practice, having successfully handled more than 3,000 cases, with a 95% success rate that speaks for itself.
              </p>
              <p>
                You are not getting generic advice. You are getting the hard-earned insight of lawyers who know exactly what it takes to secure the outcome you deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow center">PRACTICE AREAS</p>
          <h2 className="center">40 Practice Areas. One Firm.</h2>
          <div className="area-grid reveal-stagger">
            {featuredPracticeAreas.map((area) => (
              <PracticeCard key={area.slug} area={area} />
            ))}
          </div>
          <div className="center-cta reveal">
            <Link href="/practice-areas" className="btn btn-outline">
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow center">LEADERSHIP</p>
          <h2 className="center">Meet Our Founding Partners</h2>
          <div className="partner-grid reveal-stagger">
            {partners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Whether you are an individual, a growing business, or an established enterprise, we stand by you at every step."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
