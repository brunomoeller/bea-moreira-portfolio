/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  },
  images: {
    unoptimized: true,
    
  },
  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'beatrizmoreira.com',
        defaultLocale: 'en',
      },
      {
        domain: 'br.beatrizmoreira.com',
        defaultLocale: 'pt-br',
      },
    ],
  }
};

module.exports = nextConfig;
