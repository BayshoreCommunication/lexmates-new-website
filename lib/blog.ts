const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://backend-lexmates.vercel.app';

export interface ApiBlogImage {
  public_id?: string;
  url?: string;
}

export interface ApiBlogFeaturedImage {
  image?: ApiBlogImage;
  imageTitle?: string;
  altText?: string;
}

export interface ApiBlogPost {
  _id: string;
  title: string;
  body: string;
  metaDescription: string;
  author: string;
  category: string[];
  slug: string;
  featuredImage?: ApiBlogFeaturedImage;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPagination {
  currentPage: number;
  totalPages: number;
  totalBlogs: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface BlogListResponse {
  data: ApiBlogPost[];
  pagination: BlogPagination;
}

interface BlogDetailResponse {
  data: ApiBlogPost;
}

async function fetchWithRetry(url: string, options: RequestInit, retries = 3, delayMs = 500): Promise<Response> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fetch(url, options);
    } catch (err) {
      lastError = err;
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, delayMs * (attempt + 1)));
      }
    }
  }
  throw lastError;
}

export async function getBlogPosts(page = 1, limit = 10): Promise<BlogListResponse> {
  const empty = { data: [], pagination: { currentPage: page, totalPages: 0, totalBlogs: 0, limit, hasNextPage: false, hasPrevPage: false } };

  try {
    const res = await fetchWithRetry(`${API_URL}/site/blog?page=${page}&limit=${limit}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`[blog] GET /site/blog failed: HTTP ${res.status} ${res.statusText}`);
      return empty;
    }

    return res.json();
  } catch (err) {
    console.error('[blog] GET /site/blog threw after retries:', err);
    return empty;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<ApiBlogPost | null> {
  try {
    const res = await fetchWithRetry(`${API_URL}/site/blog/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`[blog] GET /site/blog/${slug} failed: HTTP ${res.status} ${res.statusText}`);
      return null;
    }

    const json: BlogDetailResponse = await res.json();
    return json.data;
  } catch (err) {
    console.error(`[blog] GET /site/blog/${slug} threw after retries:`, err);
    return null;
  }
}

export function formatBlogDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const FALLBACK_COVER = 'https://picsum.photos/seed/lexmates-blog/1200/700';

export function getBlogCoverImage(post: ApiBlogPost) {
  return post.featuredImage?.image?.url || FALLBACK_COVER;
}

export function getBlogCoverAlt(post: ApiBlogPost) {
  return post.featuredImage?.altText || post.title;
}

export function getBlogExcerpt(post: ApiBlogPost, maxLength = 160) {
  const text = post.metaDescription || post.body.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}
