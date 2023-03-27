import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <Link href={"/login"}>Sign in</Link>
      <Link href={"/signup"}>Sign up</Link>
    </nav>
  )
}
