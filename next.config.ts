import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'charityinsurance.co.nz' }],
        destination: 'https://www.charityinsurance.co.nz/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
