import Link from 'next/link';
import { PracticeArea } from '@/data/practiceAreas';

interface PracticeCardProps {
  area: PracticeArea;
}

export default function PracticeCard({ area }: PracticeCardProps) {
  return (
    <Link href={`/practice-areas/${area.slug}`} className="area-card">
      <h3>{area.title}</h3>
      <p>{area.shortDesc}</p>
      <span className="card-link">Learn more &rarr;</span>
    </Link>
  );
}
