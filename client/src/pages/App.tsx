import Navbar from '@/components/ui/Navbar'
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'

export default function App() {
  return (
    <Container>
      <Navbar />

      <Box component="div" sx={{ display: 'flex' }}>
        <Card sx={{ margin: 1 }}>
          <CardContent>
            <Typography variant="h3">Welcome on Gwitt !</Typography>
          </CardContent>
        </Card>

        <Box sx={{ display: 'flex', alignContent: 'center' }}>
          <Stack spacing={1} direction="row">
            <Link href="/login">
              <Button variant="contained">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="contained">Signup</Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}
