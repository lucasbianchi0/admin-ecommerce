/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['docs.distecna.com'], 
      },
    eslint:{
      ignoreDuringBuilds: true,
    }
};

export default nextConfig;
