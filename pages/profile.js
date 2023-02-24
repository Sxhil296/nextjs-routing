import Link from 'next/link'
import React from 'react'

const profile = () => {
  return (
    <div>
        <h1>Profile Page</h1>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
    </div>
  )
}

export default profile