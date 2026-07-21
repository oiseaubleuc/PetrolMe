/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export — reliable on Netlify (no SSR runtime required for this demo).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
