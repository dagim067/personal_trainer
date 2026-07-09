import type { NextConfig } from "next";

// GitHub Pages repository name. Update via env var if repo name differs.
const repoName = process.env.NEXT_PUBLIC_GH_PAGES_REPO || "personal_trainer";

const basePath = `/${repoName}`;
const assetPrefix = `/${repoName}/`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "sbyedtepzpdijoxctqtd.supabase.co",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
