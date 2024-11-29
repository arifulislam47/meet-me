import React from 'react'

const Background = ({className}) => {
  return (
    <div className={`fixed animate-bgSpin ${className}`}>
      <img className=' dark:opacity-[90%]' src="/backgroundImg.png" alt="" />
    </div>
  )
}

export default Background
