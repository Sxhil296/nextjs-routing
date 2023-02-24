import Link from 'next/link'
import React from 'react'

const second = () => {
  return (
    <div>
        <h1>Second Blog</h1>
        <Link href="/blog">All Blogs</Link>
    </div>
  )
}

export default second