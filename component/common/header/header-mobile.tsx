import { Box } from '@mui/material'
import React from 'react'

export interface Props{

}

export const HeaderMobile = (props: Props) => {
  return (
    <Box display={{xs: 'block', md: 'none'}}>HeaderMobile</Box>
  ) 
}