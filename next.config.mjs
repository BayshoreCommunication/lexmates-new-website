/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/partners.html', destination: '/partners', permanent: true },
      { source: '/litigation.html', destination: '/litigation', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/practice-areas.html', destination: '/practice-areas', permanent: true },
      { source: '/practice-civil-matters.html', destination: '/practice-areas/civil-matters', permanent: true },
      { source: '/practice-writ-jurisdiction.html', destination: '/practice-areas/writ-jurisdiction', permanent: true },
      { source: '/practice-land-real-estate.html', destination: '/practice-areas/land-real-estate', permanent: true },
      { source: '/practice-commercial.html', destination: '/practice-areas/commercial', permanent: true },
      { source: '/practice-tax-vat-customs.html', destination: '/practice-areas/tax-vat-customs', permanent: true },
      { source: '/practice-company-matters.html', destination: '/practice-areas/company-matters', permanent: true },
      { source: '/practice-business.html', destination: '/practice-areas/business', permanent: true },
      { source: '/practice-registration.html', destination: '/practice-areas/registration', permanent: true },
      { source: '/practice-family-matters.html', destination: '/practice-areas/family-matters', permanent: true },
      { source: '/practice-criminal-matters.html', destination: '/practice-areas/criminal-matters', permanent: true },
      { source: '/practice-immigration.html', destination: '/practice-areas/immigration', permanent: true },
      { source: '/practice-documentation-notarization.html', destination: '/practice-areas/documentation-notarization', permanent: true },
      { source: '/practice-nrb-legal-services.html', destination: '/practice-areas/nrb-legal-services', permanent: true },
      { source: '/practice-dual-citizenship.html', destination: '/practice-areas/dual-citizenship', permanent: true },
    ];
  },
};

export default nextConfig;
