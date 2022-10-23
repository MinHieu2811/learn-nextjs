import { Container, Stack, Link as MuiLink } from '@mui/material'
import { useRouter } from 'next/router'
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import { ROUTE_LIST } from './route'
import clsx from 'clsx'

export const HeaderDesktop = () => {
    const router = useRouter()
    return (
        <Box display={{ xs: 'none', md: 'block' }} padding={2}>
            <Container>
                <Stack direction='row' justifyContent="end">
                    {ROUTE_LIST.map((link) => (
                        <Link href={link.path} key={link.path} passHref>
                            <MuiLink
                                sx={{ ml: 2 }}
                                underline="none"
                                className={clsx({ active: router.pathname === link.path })}
                            >
                                {link.label}
                            </MuiLink>
                        </Link>
                    ))}
                </Stack>
            </Container>
        </Box>
    )
}