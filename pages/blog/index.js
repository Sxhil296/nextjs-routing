import Link from 'next/link'
import React from 'react'

const blog = () => {
  return (
    <div>
        <h1>Blog Page</h1>
        <p>All blog list</p>
        <Link href="/">Home</Link>
        <br />
        <Link href="/blog/first">First</Link>
        <br />
        <Link href="/blog/second">Second</Link>
       

    </div>
  )
}

export default blog