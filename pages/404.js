import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div>
        <h1>Ooopss...something went wrong!</h1>
        <Link href="/"><p>back to homepage</p></Link>
    </div>
  )
}

export default error