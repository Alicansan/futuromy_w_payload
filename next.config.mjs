import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Handle server-side externals
    if (isServer) {
      config.externals = [...(config.externals || []), "@libsql/client", "better-sqlite3"];
    }

    // Add rules to handle problematic files
    config.module.rules.push(
      {
        test: /\.node$/,
        loader: "ignore-loader",
      },
      {
        test: /LICENSE$/,
        loader: "ignore-loader",
      },
      {
        test: /\.d\.ts$/,
        loader: "ignore-loader",
      }
    );

    // Optimize build
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    };

    return config;
  },
  // Moved from experimental to root level
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  serverExternalPackages: ["@libsql/client", "@payloadcms/db-sqlite", "libsql"],
  experimental: {
    // Remove instrumentationHook as it's no longer needed
    // Use proper type for serverActions
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default withNextIntl(nextConfig);
