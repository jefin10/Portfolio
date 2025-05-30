/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.svg'],
    unoptimized: true,
  },
  // Ensure we're using the correct transpilation settings
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei"
  ],
};

export default nextConfig;
