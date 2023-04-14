import { login } from '@/app/api/auth/auth'
import { useRouter } from 'next/router'
import React from 'react'

export default function LoginForm() {
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)
  const { push } = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = emailRef.current!.value
    const password = passwordRef.current!.value

    try {
      await login({ email, password })
      push('/')
    } catch (err: any) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} id="email" type={'email'} />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input ref={passwordRef} id="password" type={'password'} />
      </div>

      <button type="submit">Login</button>
    </form>
  )
}
