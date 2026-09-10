import { notFound } from 'next/navigation';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import CtaBand from '@/components/ui/CtaBand';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found | Lexmates' };

  return {
    title: `${post.title} | Lexmates Advocates & Legal Advisers`,
    description: post.metaDesc,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogDetailPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Hero
        small
        eyebrow={post.category.toUpperCase()}
        title={post.title}
        subtitle={`${formatDate(post.date)} · ${post.author}`}
      />

      <section className="section">
        <div className="container narrow">
          <div className="blog-cover">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 780px) 100vw, 780px"
              priority
            />
          </div>
          <div className="prose">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
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
