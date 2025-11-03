import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compile } from "@mdx-js/mdx";

const CONTENT_PATH = path.join(process.cwd(), "src", "content");

export function getContentPath(...parts: string[]) {
  return path.join(CONTENT_PATH, ...parts);
}

export function getAllPosts(folder: "blog" | "projects" | "gear") {
  const folderPath = getContentPath(folder);
  const files = fs.readdirSync(folderPath).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const filePath = path.join(folderPath, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      const slug = filename.replace(/\.mdx?$/, "");
      return { ...data, slug };
    })
    .sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

// Example: load a single file and return compiled MDX
export async function getPostBySlug(folder: string, slug: string) {
  const filePath = getContentPath(folder, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const compiled = await compile(content, { outputFormat: "function-body" });
  return { compiled, data };
}
