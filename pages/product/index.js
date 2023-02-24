import Link from 'next/link'
import React from 'react'

const index = ({productId = 100}) => {
  return (
    <div>
        <h1>Product List</h1>
        <p>Product 1</p>
        <p>Product 2</p>
        
        <Link href="/product/3"><p>Product 3</p></Link>
        <Link href="/product/4" replace><p>Product 4</p></Link>
        <Link href={`/product/${productId}`}>Product {productId}</Link>
    </div>
  )
}

export default index