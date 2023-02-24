import { useRouter } from 'next/router'
import React from 'react'

const appleDetails = () => {
    const router = useRouter()
    const appleId = router.query.appleId
  return (
    <div>
        <h1>Details about Apple {appleId}</h1>
    </div>
  )
}

export default appleDetails