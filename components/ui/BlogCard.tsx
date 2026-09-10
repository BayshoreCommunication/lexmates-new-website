import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="area-card blog-card">
      <div className="blog-card-img">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 960px) 50vw, 33vw"
        />
      </div>
      <span className="blog-meta">
        {formatDate(post.date)} &middot; {post.category}
      </span>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <span className="card-link">Read more &rarr;</span>
    </Link>
  );
}
