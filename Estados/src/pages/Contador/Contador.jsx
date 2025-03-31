import React, { useState } from 'react'

export const Contador = ({counter}) => {
    const [counter ,setCounter] = useState(0)

  return (
    <>

        <button onClick={() => setCounter(counter + 1)} >sumar </button>
    </>
  )
}
