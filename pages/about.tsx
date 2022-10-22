import { Header } from '@/component/common/header';
import { MainLayout } from '@/component/layout';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Typography, Box } from '@mui/material'

export interface AboutPageProps {
}

export default function AboutPage (props: AboutPageProps) {

  const [postList, setPostList] = React.useState([])
  const router = useRouter()

  const page = router?.query?.page
  console.log("🚀 ~ file: about.tsx ~ line 15 ~ AboutPage ~ page", page)

  React.useEffect(() => {
    if(!page) return 
    ;(async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      const data = await response.json()

      setPostList(data?.data)
    })()
  }, [page])

  function handleNextClick() {
    router.push({
      pathname: '/about',
      query: {
        page: Number(page || 1) + 1
      },
    }, 
    undefined,
    { shallow: true})
  }
  return (
    <Box>
      <Typography component='h1' variant='h3' color='primary.main'>About us</Typography>

      <Header />

      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={handleNextClick}>Next</button>
    </Box>
  );
}

AboutPage.Layout = MainLayout

export async function getStaticProps() {
  console.log('get Static Props')

  return {
    props: {}
  }
}