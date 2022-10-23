import * as React from 'react';
import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import { Box, Stack } from '@mui/material';
import { Footer } from '@/component/common'
import { Header } from '@/component/common/header/index';

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow="1">
        <Box>
          {children}
        </Box>
      </Box>

      <Footer />
    </Stack>
  );
}
