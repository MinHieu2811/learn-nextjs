import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailsProps {
}

export default function CreatePost (props: PostDetailsProps) {

    const router = useRouter()


  return (
    <div>
      Post Details

      <p>{JSON.stringify(router.query)}</p> 
    </div>
  );
}