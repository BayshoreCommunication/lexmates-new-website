import { notFound } from 'next/navigation';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import CtaBand from '@/components/ui/CtaBand';
import { formatBlogDate, getBlogCoverAlt, getBlogCoverImage, getBlogPostBySlug } from '@/lib/blog';

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

  return (
    <>
      <Hero
        small
        eyebrow={post.category?.join(', ').toUpperCase()}
        title={post.title}
        subtitle={`${formatBlogDate(post.createdAt)} · ${post.author}`}
      />

      <section className="section">
        <div className="container narrow">
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
      </section>

      <CtaBand
        title="Have a legal question? Let's talk."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
