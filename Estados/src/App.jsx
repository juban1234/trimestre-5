import { useState } from 'react'


export const App = () => {
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

      <button onClick={handleGreet}>
          iniciar
      </button>
    </main>

  )
}

