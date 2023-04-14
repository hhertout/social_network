import { AppBar, Box, Link, Stack, Toolbar } from '@mui/material'
import React from 'react'

export default function Navbar() {
  return (
    <Box sx={{ display: 'flex', margin: 5 }}>
      <AppBar component="nav">
        <Toolbar>
          <Box>
            <Stack spacing={1} direction="row">
              <Link href={'/'} sx={{ color: 'white' }}>
                Home
              </Link>
              <Link href={'/login'} sx={{ color: 'white' }}>
                Login
              </Link>
              <Link href={'/signup'} sx={{ color: 'white' }}>
                Sign up
              </Link>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
