import { signup } from '@/app/api/auth/auth'
import { useRouter } from 'next/router'
import React, { ChangeEvent } from 'react'

export default function SignupForm() {
  const { push } = useRouter()
  const [signUpPassword, setSignUpPassword] = React.useState({
    password: '',
    confirmPassword: '',
  })
  const emailRef = React.useRef<HTMLInputElement>(null)
  const usernameRef = React.useRef<HTMLInputElement>(null)
  const firstnameRef = React.useRef<HTMLInputElement>(null)
  const lastnameRef = React.useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = emailRef.current!.value
    const username = usernameRef.current!.value
    const firstname = firstnameRef.current!.value
    const lastname = lastnameRef.current!.value

    if (signUpPassword.password === signUpPassword.confirmPassword) {
      try {
        await signup({
          email,
          username,
          firstname,
          lastname,
          password: signUpPassword.password,
        })

        push('/login')
      } catch (err: any) {
        console.log(err)
      }
    }
  }

  const handlePwdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpPassword({
      ...signUpPassword,
      password: e.target.value,
    })
  }

  const handleConfirmPwdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpPassword({
      ...signUpPassword,
      confirmPassword: e.target.value,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input ref={emailRef} id="email" type={'email'} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type={'password'}
            onChange={handlePwdChange}
            value={signUpPassword.password}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm your Password</label>
          <input
            id="confirmPassword"
            type={'password'}
            onChange={handleConfirmPwdChange}
            value={signUpPassword.confirmPassword}
          />
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <input ref={usernameRef} id="username" type={'text'} />
        </div>
        <div>
          <label htmlFor="firstname">Firstname</label>
          <input ref={firstnameRef} id="firstname" type={'text'} />
        </div>
        <div>
          <label htmlFor="lastname">Lastname</label>
          <input ref={lastnameRef} id="lastname" type={'text'} />
        </div>

        <button type="submit">Signup</button>
      </form>
    </>
  )
}
