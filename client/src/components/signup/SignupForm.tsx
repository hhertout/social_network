import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useState } from 'react'

export default function SignupForm() {
  const { push } = useRouter()
  const [signUpPassword, setSignUpPassword] = useState({
    password: '',
    confirmPassword: '',
  })
  const [logs, setLogs] = useState({
    email: '',
    username: '',
    firstname: '',
    lastname: '',
  })

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLogs({ ...logs, email: e.target.value })
  }
  const handleUsernameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setLogs({ ...logs, username: e.target.value })
  }
  const handleFirstnameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setLogs({ ...logs, firstname: e.target.value })
  }
  const handleLastnameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setLogs({ ...logs, lastname: e.target.value })
  }
  const handlePwdChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSignUpPassword({ ...signUpPassword, password: e.target.value })
  }
  const handleConfirmPwdChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSignUpPassword({ ...signUpPassword, confirmPassword: e.target.value })
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const data = {
      email: logs.email,
      password: signUpPassword.password,
      username: logs.username,
      firstname: logs.firstname,
      lastname: logs.lastname,
    }
    console.log(data)
  }

  return (
    <Container maxWidth={'xs'}>
      <Typography variant="h4" sx={{ marginBlock: 2 }}>
        Signup Here !
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            id="email"
            label="Email"
            type="email"
            value={logs.email}
            onChange={handleEmailChange}
            variant="outlined"
            required={true}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={signUpPassword.password}
            onChange={handlePwdChange}
            variant="outlined"
            required={true}
          />
          <TextField
            id="confirmPassword"
            label="Confirm your password"
            type="password"
            value={signUpPassword.confirmPassword}
            onChange={handleConfirmPwdChange}
            variant="outlined"
            required={true}
            helperText={
              signUpPassword.password === signUpPassword.confirmPassword
                ? 'Passwords match'
                : 'Passwords do not match'
            }
            error={signUpPassword.password !== signUpPassword.confirmPassword}
          />
          <Divider />
          <TextField
            id="username"
            label="Username"
            type="text"
            value={logs.username}
            onChange={handleUsernameChange}
            variant="outlined"
            required={true}
          />
          <TextField
            id="firstname"
            label="First Name"
            type="text"
            value={logs.firstname}
            onChange={handleFirstnameChange}
            variant="outlined"
            required={true}
          />
          <TextField
            id="lastname"
            label="Last Name"
            type="text"
            value={logs.lastname}
            onChange={handleLastnameChange}
            variant="outlined"
            required={true}
          />
          <Box>
            <Button
              disabled={
                signUpPassword.password !== signUpPassword.confirmPassword
              }
              variant="contained"
              type="submit"
            >
              Signup
            </Button>
          </Box>
        </Stack>
      </form>
    </Container>
  )
}
