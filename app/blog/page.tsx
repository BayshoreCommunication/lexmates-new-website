import Link from 'next/link';
import Hero from '@/components/ui/Hero';
import BlogCard from '@/components/ui/BlogCard';
import CtaBand from '@/components/ui/CtaBand';
import { getBlogPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog & Resources | Lexmates Advocates & Legal Advisers',
  description:
    'Insights, updates, and practical legal resources from the Lexmates team.',
};

interface BlogPageProps {
  searchParams: { page?: string };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const page = Math.max(1, Number(searchParams.page) || 1);
  const { data: posts, pagination } = await getBlogPosts(page);

  return (
    <>
      <Hero
        small
        title="Blog & Resources"
        subtitle="Insights, updates, and practical guidance from the Lexmates team."
      />

      <section className="section">
        <div className="container">
          {posts.length > 0 ? (
            <div className="area-grid area-grid-wide blog-grid">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <h3>No Blog Post Found</h3>
              <p>We&apos;re working on new articles. Please check back soon.</p>
            </div>
          )}

          {pagination.totalPages > 1 && (
            <nav className="pagination" aria-label="Blog pagination">
              {pagination.hasPrevPage && (
                <Link href={`/blog?page=${pagination.currentPage - 1}`}>&larr; Newer</Link>
              )}
              <span>
                Page {pagination.currentPage} of {pagination.totalPages}
              </span>
              {pagination.hasNextPage && (
                <Link href={`/blog?page=${pagination.currentPage + 1}`}>Older &rarr;</Link>
              )}
            </nav>
          )}
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
