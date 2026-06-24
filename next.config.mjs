import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  outputFileTracingExcludes: {
    "/photography": ["./public/assets/photography/**/*"],
    "/photography/[slug]": ["./public/assets/photography/**/*"],
    "/extra": ["./public/assets/photography/**/*"],
  },
};

export default withMDX(nextConfig);
