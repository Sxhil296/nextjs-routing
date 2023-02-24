import { useRouter } from 'next/router'
import React from 'react'

const docs = () => {
    const router = useRouter()
    const { params = [] } = router.query

    if (params.length === 2) {
        return (
            <h2>Viewing docs for feature {params[0]} and concept {params[1]}</h2>
        )
    } else if (params.length === 1) {
        return (
            <h2>Viewing docs for feature {params[0]}</h2>
        )
    }

  return (
    <div>
        <h1>Docs home page</h1>
    </div>
  )
}

export default docs