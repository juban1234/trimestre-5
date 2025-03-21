import React from 'react'

export const NavBar = () => {
    return (
        <>
            <ul>
                <ItemNav route={'/'} content='Home ' />
                <ItemNav route={'/actividad1'} content='Técnicas Básicas ' />
                <ItemNav route={'/actividad2'} content='Habilidades Sociales ' />
                <ItemNav route={'/actividad3'} content='Experiencia Profesional ' />
                <ItemNav route={'/actividad4'} content='Estudios ' />
            </ul>
        </>
    )
}
