import * as React from 'react';
import { Box } from '@mui/material'

export interface HeaderProps {
}

export function Header (props: HeaderProps) {
  return (
    <Box component="header" textAlign="center">
      Header
    </Box>
  );
}
