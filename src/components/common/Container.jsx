import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='container px-6 py-3 mx-auto'>
      {children}
    </div>
  )
}

export default Container