import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

const postsDirectory = join(process.cwd(), "_posts");

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
}

export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { ...data, slug: realSlug, content } as Post;
  } catch (err) {
    console.log(err);
    return undefined;
  }

}

export const getAllPosts = (): Post[] => {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug)) as Post[];
  if (posts) {
    return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  }
  return posts;
}
