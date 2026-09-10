import Hero from '@/components/ui/Hero';
import BlogCard from '@/components/ui/BlogCard';
import CtaBand from '@/components/ui/CtaBand';
import { blogPosts } from '@/data/blog';

export const metadata = {
  title: 'Blog & Resources | Lexmates Advocates & Legal Advisers',
  description:
    'Insights, updates, and practical legal resources from the Lexmates team.',
};

export default function BlogPage() {
  return (
    <>
      <Hero
        small
        title="Blog & Resources"
        subtitle="Insights, updates, and practical guidance from the Lexmates team."
      />

      <section className="section">
        <div className="container">
          <div className="area-grid area-grid-wide blog-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
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
