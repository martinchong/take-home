import { notFound } from "next/navigation";
import Image from "next/image";

import { markdownToHtml } from "@/util/remark";
import { getAllPosts, getPostBySlug } from "@/util/post";
import { Container } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Post = async({ params }: any) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const image = (
    <Image
      src={post.coverImage}
      alt={`Cover Image for ${post.slug}`}
      width={1000}
      height={500}
      style={{ width: '100%', height: '500' }}
    />
  );

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="main">
      <Container>
        {image}
        <article className="post__article">
          <div
            className="post__body"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </Container>
    </main>
  );
}

export const generateStaticParams = async() => {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default Post;