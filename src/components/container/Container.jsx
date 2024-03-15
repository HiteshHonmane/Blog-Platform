import React from 'react'

function Container({children}) {
  return (
    <div className='bg-gray-300 sm:w-full sm:max-w-7xl sm:mx-auto sm:px-4'>{children}</div>
  )
}

export default Container