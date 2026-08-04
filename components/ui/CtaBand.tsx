import Link from 'next/link';

interface CtaBandProps {
  title: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CtaBand({
  title,
  buttonText = 'Contact Us',
  buttonHref = '/contact',
}: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="container reveal">
        <h2>{title}</h2>
        <Link href={buttonHref} className="btn btn-primary">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
