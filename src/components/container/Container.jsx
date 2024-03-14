import React from 'react'

function Container({children}) {
  return (
    <div className='sm:w-full  sm:max-w-7xl sm:mx-auto sm:px-4'>{children}</div>
  )
}

export default Container