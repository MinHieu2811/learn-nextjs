import { MainLayout } from '@/component/layout'
import { useRouter } from 'next/router'
import { NextPageWithLayout } from '@/models/index'
import { Box } from '@mui/material'
import { HeroSection } from '@/component/home'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
