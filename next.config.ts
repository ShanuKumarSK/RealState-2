/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "source.unsplash.com",
      "api.unsplash.com",
      "img.freepik.com",
      "www.iari.res.in",
      "eu-images.contentstack.com"
    ]
  },
};

module.exports = {
  webpack(config:any) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [{ loader: 'file-loader' }],
    });
    return config;
  },
};

export default nextConfig;

