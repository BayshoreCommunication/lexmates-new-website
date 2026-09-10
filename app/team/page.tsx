import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import CtaBand from '@/components/ui/CtaBand';
import { partners } from '@/data/partners';

export const metadata = {
  title: 'Partners | Lexmates Advocates & Legal Advisers',
  description:
    'Meet Parvez Hashem and Kamrul Islam Arif, the founding partners of Lexmates.',
};

export default function PartnersPage() {
  const [parvez, arif] = partners;

  return (
    <>
      <Hero
        small
        title="Partners"
        subtitle="The founding minds behind Lexmates — litigators, strategists, and advisors."
      />

      {parvez && (
        <section className="section">
          <div className="container narrow partner-profile">
            <div className="avatar avatar-lg">
              <Image
                src={parvez.avatar}
                alt={parvez.name}
                width={150}
                height={150}
                priority
              />
            </div>
            <h2>{parvez.name}</h2>
            <p className="role">{parvez.role}</p>
            <div className="prose">
              {parvez.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            {parvez.barMemberships && (
              <div className="credential-list">
                {parvez.barMemberships.map((membership, idx) => (
                  <span key={idx}>{membership}</span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {arif && (
        <section className="section alt">
          <div className="container narrow partner-profile">
            <div className="avatar avatar-lg">
              <Image
                src={arif.avatar}
                alt={arif.name}
                width={150}
                height={150}
              />
            </div>
            <h2>{arif.name}</h2>
            <p className="role">{arif.role}</p>
            <div className="prose">
              {arif.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            {arif.barMemberships && (
              <div className="credential-list">
                {arif.barMemberships.map((membership, idx) => (
                  <span key={idx}>{membership}</span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <CtaBand
        title="Ready to discuss your case?"
        buttonText="Discuss Your Case"
        buttonHref="/contact"
      />
    </>
  );
}
