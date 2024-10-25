'use client';

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Link from 'next/link';
import usePosts from '@/hooks/use-posts';

export default function Home() {
  const posts = usePosts();

  return (
    <main>
      {posts.map(post => (
        <Card key={post.id}>
          <CardHeader>
            <h4>{post.title}</h4>
          </CardHeader>

          <CardBody>
            <p>{post.body.substring(0, 100)}...</p>
          </CardBody>

          <CardFooter>
            <Link href={`/post/${post.id}`}>
              Read more
            </Link>
          </CardFooter>
        </Card>
      ))}
    </main>
  );
}