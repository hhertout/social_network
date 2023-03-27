import { login } from "@/app/api/auth/auth"
import React from "react"

export default function LoginForm() {
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = emailRef.current!.value
    const password = passwordRef.current!.value

    await login({ email, password })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} id="email" type={"email"} />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input ref={passwordRef} id="password" type={"password"} />
      </div>

      <button type="submit">Login</button>
    </form>
  )
}
