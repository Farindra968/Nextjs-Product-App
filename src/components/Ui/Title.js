import React from 'react'

function Title({title}) {
  return (
    <div>
      <h1 className='text-xl md:text-2xl font-poppins-bold text-primary-600'>{title}</h1>
    </div>
  )
}

export  {Title}
