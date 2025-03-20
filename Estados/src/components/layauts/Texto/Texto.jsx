import { useState } from 'react'


export const Texto = () => {
  const [text, setTexto] = useState('')
  const [username, setUsername] = useState("bienvenido usuario")

  const handleGreet = () =>{
    setUsername('bienvenido ' +text)
  }


  return (
    <main className=''>
    <h1>{username} </h1>
      <input type="text"         
        value={text}
        onChange={(e) => setTexto(e.target.value)}
        placeholder='nombre usuario' />

        <input type="text" />

      <button onClick={handleGreet}>
          iniciar
      </button>
    </main>

  )
}
