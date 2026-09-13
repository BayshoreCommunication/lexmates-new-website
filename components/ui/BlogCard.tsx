import Link from 'next/link';
import Image from 'next/image';
import {
  ApiBlogPost,
  formatBlogDate,
  getBlogCoverAlt,
  getBlogCoverImage,
  getBlogExcerpt,
} from '@/lib/blog';

interface BlogCardProps {
  post: ApiBlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const coverImage = getBlogCoverImage(post);
  const isDataUrl = coverImage.startsWith('data:');

  return (
    <Link href={`/blog/${post.slug}`} className="area-card blog-card">
      <div className="blog-card-img">
        <Image
          src={coverImage}
          alt={getBlogCoverAlt(post)}
          fill
          unoptimized={isDataUrl}
          sizes="(max-width: 720px) 100vw, (max-width: 960px) 50vw, 33vw"
        />
      </div>
      <span className="blog-meta">{formatBlogDate(post.createdAt)}</span>
      <h3>{post.title}</h3>
      <p>{getBlogExcerpt(post)}</p>
      <span className="card-link">Read more &rarr;</span>
    </Link>
  );
}
