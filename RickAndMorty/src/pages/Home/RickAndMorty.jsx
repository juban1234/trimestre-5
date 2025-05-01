import React, { useEffect, useState } from 'react'
import { Card } from '../../layauts/Card/Card' 

const URL = "https://rickandmortyapi.com/api/character"


export const RickAndMorty =()=> {

  const [characters ,setCharacters] = useState([])

  useEffect(() =>{
    
  })

  const handleGetCharacter = async () =>{
    const response = await fetch(URL)
    const data = await response.json()
    setCharacters(data.results)
  }

  return (
    <>
        <div className='min-h-screen min-w-full flex flex-col flex-wrap'>
            
            <section className='grid grid-cols-1'>
              { 
                characters.map(characters => (
                  <Card key={characters.id} {...characters}/>
                ))
              }
            </section>
        </div>
    </>
  )
}
