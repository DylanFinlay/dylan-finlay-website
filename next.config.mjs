import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  outputFileTracingExcludes: {
    "/photography": ["./public/assets/gallery/**/*"],
    "/photography/[slug]": ["./public/assets/gallery/**/*"],
    "/extra": ["./public/assets/gallery/**/*"],
  },
};

export default withMDX(nextConfig);
