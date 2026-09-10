import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <Image
              src="/images/logo.png"
              alt="Lexmates Advocates & Legal Advisers"
              width={220}
              height={54}
              className="logo-img footer-logo-img"
            />
          </div>
          <p>One of Dhaka's most complete law firms, across 40 practice areas.</p>
        </div>
        <div className="footer-col">
          <h4>Firm</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/team">Meet the Team</Link></li>
            <li><Link href="/litigation">Litigation</Link></li>
            <li><Link href="/blog">Blog & Resources</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Practice Areas</h4>
          <ul>
            <li><Link href="/practice-areas/civil-matters">Civil Matters</Link></li>
            <li><Link href="/practice-areas/commercial">Commercial</Link></li>
            <li><Link href="/practice-areas/company-matters">Company Matters</Link></li>
            <li><Link href="/practice-areas/family-matters">Family Matters</Link></li>
            <li><Link href="/practice-areas/criminal-matters">Criminal Matters</Link></li>
            <li><Link href="/practice-areas/immigration">Immigration</Link></li>
            <li><Link href="/practice-areas" className="footer-view-all">View All &rarr;</Link></li>
          </ul>
        </div>
        <div className="footer-col footer-col-contact">
          <h4>Contact</h4>
          <ul>
            <li className="footer-contact-name">Parvez Hashem</li>
            <li>WhatsApp: <a href="https://wa.me/8801711943782" target="_blank" rel="noopener noreferrer">+880 1711-943782</a></li>
            <li>USA: <a href="https://wa.me/18135686906" target="_blank" rel="noopener noreferrer">+1 813 568 6906</a></li>
            <li>Email: <a href="mailto:parvez.lexmates@gmail.com">parvez.lexmates@gmail.com</a></li>
            <li className="footer-contact-name">Kamrul Islam Arif</li>
            <li>WhatsApp: <a href="https://wa.me/8801727145247" target="_blank" rel="noopener noreferrer">+880 1727-145247</a></li>
            <li>Email: <a href="mailto:arif.advo@yahoo.com">arif.advo@yahoo.com</a></li>
            <li className="footer-address">Lexmates, House No-35 (3rd Floor), Road No-04, Block-F, Kolwalapara, Dhaka 1216, Bangladesh</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lexmates. All Rights Reserved.</p>
        <p className="disclaimer">Attorney Advertising: This website is for general information only and does not constitute legal advice or form a lawyer/client relationship.</p>
      </div>
    </footer>
  );
}
