import Link from 'next/link'
import React from 'react'

const first = () => {
  return (
    <div>
        <h1>First Blog</h1>
        <Link href="/blog">All Blogs</Link>
    </div>
  )
}

export default first