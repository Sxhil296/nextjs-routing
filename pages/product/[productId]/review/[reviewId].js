import { useRouter } from 'next/router'
import React from 'react'

const review = () => {
    const router = useRouter()
    const { reviewId, productId } = router.query
  return (
    <div>
        <h1>Review {reviewId} for product {productId}</h1>
    </div>
  )
}

export default review