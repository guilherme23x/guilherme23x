/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'br.pinterest.com/',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gui23x.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',

        hostname: 'github.com/guilherme23x',
        port: '',
        pathname: '/**',
      },
      
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'private-user-images.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
