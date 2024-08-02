/** @type {import('next').NextConfig} */
import MillionLint from "@million/lint";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.alchemy.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },

    ],
  },
};

export default MillionLint.next({ rsc: true })(nextConfig);
