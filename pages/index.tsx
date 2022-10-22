import { MainLayout } from '@/component/layout'
import { useRouter } from 'next/router'
import { NextPageWithLayout } from '@/models/index'
import { Box } from '@mui/material'

const Home: NextPageWithLayout = () => {
  const router = useRouter()

  const goToDetailsPage = () => {
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: '123',
        ref: 'social'
      }
    })
  }
  return (
    <Box>
      home Page
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
