import React from 'react';

interface HeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  small?: boolean;
  light?: boolean;
  children?: React.ReactNode;
}

export default function Hero({
  eyebrow,
  title,
  subtitle,
  small = false,
  light = false,
  children,
}: HeroProps) {
  return (
    <section className={`hero ${small ? 'hero-small' : ''} ${light ? 'hero-light' : ''}`}>
      <div className="container hero-inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="hero-sub">{subtitle}</p>}
        {children && <div className="hero-cta">{children}</div>}
      </div>
    </section>
  );
}
