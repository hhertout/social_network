import Navbar from '@/components/ui/Navbar'
import Link from 'next/link'
import React from 'react'

export default function App() {
  return (
    <div>
      <Navbar />
      Welcome on Gwitt !<Link href={'/login'}>Login</Link>
    </div>
  )
}
