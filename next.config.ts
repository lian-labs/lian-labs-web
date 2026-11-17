import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** The Ethiopia edition used to live under /et; it is now the whole site. */
  async redirects() {
    return [
      { source: "/et", destination: "/", permanent: true },
      { source: "/et/:path*", destination: "/:path*", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
