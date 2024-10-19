/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'max-age=300, stale-while-revalidate=59'
          }
        ]
      }
    ]
  }
};

export default nextConfig;
