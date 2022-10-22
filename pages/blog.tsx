import { MainLayout } from '@/component/layout';
import { Box } from '@mui/material';
import * as React from 'react';

export interface BlogProps {
}

export default function Blog (props: BlogProps) {
  return (
    <Box>
        Blog
    </Box>
  );
}

Blog.Layout = MainLayout