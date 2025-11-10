import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async rewrites() {
    return [
      {
        source: "/legacyportfolio",
        destination: "https://dylan-portfolio-legacy-u2d3.vercel.app",
      },
      {
        source: "/legacyportfolio/:path*",
        destination: "https://dylan-portfolio-legacy-u2d3.vercel.app/:path*",
      },
    ];
  },
};

export default withMDX(nextConfig);
