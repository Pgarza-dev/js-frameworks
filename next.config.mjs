// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["static.noroff.dev"],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.noroff.dev",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;