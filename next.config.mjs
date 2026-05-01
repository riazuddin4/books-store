/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      // {
      //   hostname: 'i.pinimg.com'
      // },
      // {
      //   hostname: 'assets.visme.co'
      // },
      {
        hostname: '**'
      }
    ]
  }
};

export default nextConfig;
