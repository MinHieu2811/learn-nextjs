import * as React from 'react';
import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import { Box, Stack } from '@mui/material';
import { Header, Footer } from '@/component/common'

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow="1">
        <Link passHref href="/">
          <a>Home</a>
        </Link>

        <Link passHref href="/about">
          <a>About</a>
        </Link>

        <Link passHref href="/blog">
          <a>Blog</a>
        </Link>

        <Link passHref href="/works">
          <a>Works</a>
        </Link>

        <Box>
          {children}
        </Box>
      </Box>

      <Footer />
    </Stack>
  );
}
