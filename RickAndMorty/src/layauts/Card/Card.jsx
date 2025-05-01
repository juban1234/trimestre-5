import React from 'react'

export const Card = ({name,species,image}) => {
  return (
    <>
        <h2 > {name} </h2>
        <p> {species} </p>
        <img src ={image} alt="imaqgen de un personaje de rick and morty" />
    </>
  )
}
