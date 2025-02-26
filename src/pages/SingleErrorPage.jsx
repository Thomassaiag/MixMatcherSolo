import React from 'react'
import { useRouteError } from 'react-router-dom'


const SingleErrorPage = () => {
    const error=useRouteError()
    console.log(error)
  return (
    <p style={{textAlign: 'center'}}>{error.message}</p>
  )
}

export default SingleErrorPage