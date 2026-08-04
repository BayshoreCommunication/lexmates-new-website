import Link from 'next/link';
import Hero from '@/components/ui/Hero';
import StatCounters from '@/components/ui/StatCounters';
import CtaBand from '@/components/ui/CtaBand';
import { firmStats } from '@/data/stats';

export const metadata = {
  title: 'About Us | Lexmates Advocates & Legal Advisers',
  description:
    'Learn who Lexmates is, how the firm operates, and why clients trust us with matters that matter.',
};

export default function AboutPage() {
  const aboutStats = firmStats.slice(0, 3);

  return (
    <>
      <Hero
        small
        title="About Lexmates"
        subtitle="Sharp legal thinking. Honest counsel. No matter how complex the matter."
      />

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">WHO WE ARE</p>
          <div className="prose">
            <p>
              At Lexmates, we believe every client deserves sharp legal thinking and honest counsel, no matter how complex the matter.
            </p>
            <p>
              We are advocates first. We argue, negotiate, and appear in court so you don’t have to face the legal system alone. Our team has spent years in courtrooms and tribunals, handling everything from civil rights and personal injury claims to financial fraud, corporate disputes, immigration matters, and criminal defense.
            </p>
            <p>
              We know that no legal matter is ever just about the paperwork or the money. It is about your business, your family, your future. That is why we take the time to understand what is truly at stake, and we tell you plainly where you stand, what your options are, and what to expect next.
            </p>
            <p>
              Lexmates has built its reputation on being relentless for our clients while staying grounded, professional, and ethical in everything we do. Whether you are an individual, a growing business, or an established enterprise, we stand by you at every step.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow">
          <h2>The Firm</h2>
          <div className="prose">
            <p>
              Lexmates is one of Dhaka’s most complete law firms — a single destination for every legal challenge, whether you are a multinational corporation navigating a complex transaction or an individual seeking justice in court.
            </p>
            <p>
              Our Litigation Division is at home in every forum, from the subordinate courts right up to the Supreme Court of Bangladesh. Meanwhile, our non-litigation teams handle the full spectrum of corporate, infrastructure, property and intellectual property matters with equal depth and precision.
            </p>
            <p>
              What makes us different is this rare symbiosis of seasoned litigators and transactional lawyers working side by side under one roof, covering 40 distinct practice areas, each led by advocates with the experience to make a real difference to your case.
            </p>
          </div>
        </div>
      </section>

      <StatCounters stats={aboutStats} />

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

      <CtaBand
        title="Get to know the partners behind Lexmates."
        buttonText="Meet Our Partners"
        buttonHref="/partners"
      />
    </>
  );
}
