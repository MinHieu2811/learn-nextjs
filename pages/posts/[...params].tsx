import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsPageProps {
}

export default function CreatePost (props: ParamsPageProps) {

    const router = useRouter()


  return (
    <div>
      Post Details

      <p>Query: {JSON.stringify(router.query)}</p> 
    </div>
  );
}