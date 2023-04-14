import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import React, { ChangeEvent, FormEvent, useState } from 'react'

export default function LoginForm() {
  const [logs, setLogs] = useState({
    email: '',
    password: '',
  })

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLogs({
      ...logs,
      email: e.target.value,
    })
  }
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLogs({
      ...logs,
      password: e.target.value,
    })
  }

  const { push } = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    console.log(logs.email, logs.password)
  }
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" sx={{ marginBlock: 3 }}>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            required={true}
            value={logs.email}
            onChange={handleEmailChange}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            required={true}
            value={logs.password}
            onChange={handlePasswordChange}
          />
          <Box>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Box>
        </Stack>
      </form>
    </Container>
  )
}
