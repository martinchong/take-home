import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/util/post";
import { Container } from "@mui/material";
export default function Home() {

  const posts = getAllPosts();

  console.log(posts);

  return (
      <main className='main'>
        <Container>
          {posts.map((post) => (
            <div className='post' key={post.slug}>
              <PostCard slug={post.slug} title={post.title} author={post.author} date={post.date} image={post.coverImage} content={post.excerpt} />
            </div>
          ))}
        </Container>
      </main>
  );
}
