'use client';

import { useParams } from 'next/navigation';
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import usePost from '@/hooks/use-post';

const Post = () => {
  const { id } = useParams();
  const { post, loading } = usePost(id);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Card>
        <CardHeader>
          <h1>{post?.title}</h1>
        </CardHeader>

        <CardBody>
          <p>{post?.body}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;