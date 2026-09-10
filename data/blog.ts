export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDesc: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-writ-jurisdiction-bangladesh',
    title: 'Understanding Writ Jurisdiction in Bangladesh: When and How to Approach the High Court',
    excerpt:
      'A practical guide to Article 102 writ petitions — what they are, when they apply, and what to expect when challenging unlawful action by a public authority.',
    metaDesc:
      'A practical guide to filing writ petitions under Article 102 of the Constitution of Bangladesh, covering eligibility, common grounds, and the process before the High Court Division.',
    date: '2026-08-18',
    author: 'Parvez Hashem',
    category: 'Litigation',
    coverImage: 'https://picsum.photos/seed/writ-jurisdiction-bangladesh/1200/700',
    content: [
      'Article 102 of the Constitution of the People’s Republic of Bangladesh gives the High Court Division wide powers to enforce fundamental rights and review the legality of actions taken by public authorities. In practice, a writ petition is often the fastest and most direct route available when a government office, statutory body, or public official acts outside its lawful authority.',
      'Writs are commonly sought in five recognised forms: mandamus (compelling a public authority to perform a legal duty), prohibition (restraining an authority from acting beyond its jurisdiction), certiorari (quashing an unlawful order or decision), quo warranto (challenging a person’s right to hold a public office), and habeas corpus (securing the release of a person unlawfully detained). Each serves a distinct purpose, and choosing the right form is often the difference between a petition being admitted or dismissed at the outset.',
      'Before filing, it is important to establish that the matter falls within the Court’s writ jurisdiction and that no equally efficacious alternative remedy exists — a requirement the Court takes seriously. Petitioners should also be mindful of delay: while there is no fixed limitation period for writs, unexplained delay in approaching the Court can itself be a ground for refusal.',
      'At Lexmates, we regularly advise both individuals and businesses on whether a writ petition is the appropriate remedy, prepare the supporting affidavits and documentation, and represent clients through hearing, interim orders, and final disposal. If you believe a public authority has acted unlawfully, arbitrarily, or in excess of its powers, early legal advice can materially improve the outcome.',
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
