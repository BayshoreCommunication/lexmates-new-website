import Link from 'next/link';
import Image from 'next/image';
import { Partner } from '@/data/partners';

interface PartnerCardProps {
  partner: Partner;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <Link href="/partners" className="partner-card">
      <div className="avatar">
        <Image
          src={partner.avatar}
          alt={partner.name}
          width={88}
          height={88}
        />
      </div>
      <h3>{partner.name}</h3>
      <p className="role">{partner.role}</p>
      <p className="credential">{partner.credential}</p>
    </Link>
  );
}
