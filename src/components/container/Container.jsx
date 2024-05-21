import React from 'react'

function Container({children}) {
  return (
    <div className=' sm:w-[100vw]   sm:mx-auto sm:px-4'>{children}</div>
  )
}

export default Container