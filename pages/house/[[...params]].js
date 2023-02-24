import { useRouter } from 'next/router'
import React from 'react'

const houseFilter = () => {
    const router = useRouter()
    const {params = []} = router.query

    if (params.length == 2) {
      return (
        <h2>House {params[0]} under budget {params[1]}</h2>
      )
    } else if (params.length === 1) {
      return(
        <h2>House {params[0]}</h2>
      )
    }
    
  return (
    <div>
        <h1>Houses</h1>
    </div>
  )
}

export default houseFilter