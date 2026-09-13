import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import CtaBand from '@/components/ui/CtaBand';
import {
  ApiBlogPost,
  formatBlogDate,
  getBlogCoverAlt,
  getBlogCoverImage,
  getBlogPostBySlug,
  getBlogPosts,
} from '@/lib/blog';

const RECENT_POSTS_LIMIT = 10;

function RecentPosts({ posts, currentSlug }: { posts: ApiBlogPost[]; currentSlug: string }) {
  const recent = posts.filter((post) => post.slug !== currentSlug).slice(0, RECENT_POSTS_LIMIT);

  if (recent.length === 0) return null;

  return (
    <aside className="blog-detail-sidebar">
      <h3>Recent Posts</h3>
      <ul className="recent-posts-list">
        {recent.map((post) => {
          const cover = getBlogCoverImage(post);
          const isDataUrl = cover.startsWith('data:');

          return (
            <li key={post._id} className="recent-post-item">
              <Link href={`/blog/${post.slug}`} className="recent-post-link">
                <div className="recent-post-thumb">
                  <Image
                    src={cover}
                    alt={getBlogCoverAlt(post)}
                    fill
                    unoptimized={isDataUrl}
                    sizes="72px"
                  />
                </div>
                <div>
                  <span className="recent-post-title">{post.title}</span>
                  <span className="recent-post-date">{formatBlogDate(post.createdAt)}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found | Lexmates' };

  return {
    title: `${post.title} | Lexmates Advocates & Legal Advisers`,
    description: post.metaDescription,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const coverImage = getBlogCoverImage(post);
  const isDataUrl = coverImage.startsWith('data:');
  const { data: recentPosts } = await getBlogPosts(1, RECENT_POSTS_LIMIT + 1);

  return (
    <>
      <Hero
        small
        title={post.title}
        subtitle={formatBlogDate(post.createdAt)}
      />

      <section className="section">
        <div className="container">
          <div className="blog-detail-layout">
            <div className="blog-detail-main">
              <div className="blog-cover">
                <Image
                  src={coverImage}
                  alt={getBlogCoverAlt(post)}
                  fill
                  unoptimized={isDataUrl}
                  sizes="(max-width: 780px) 100vw, 780px"
                  priority
                />
              </div>
              <div className="prose" dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>

            <RecentPosts posts={recentPosts} currentSlug={post.slug} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a legal question? Let's talk."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
