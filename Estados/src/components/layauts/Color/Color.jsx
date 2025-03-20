import { useState } from "react";

export const Color = () => {
  const colors = ["#FF0000",     // Rojo
    "#00FF00",     // Verde
    "#0000FF",     // Azul
    "#FFFF00",     // Amarillo
    "#FF00FF",     // Magenta
    "#00FFFF",     // Cian
    "#000000",     // Negro
    "#FFFFFF",     // Blanco
    "#808080",     // Gris
    "#800000",     // Marrón oscuro
    "#808000",     // Oliva
    "#800080",     // Púrpura
    "#008080",     // Verde azulado
    "#C0C0C0",     // Plata
    "#FFA500",     // Naranja
    "#A52A2A"      // Marrón
  ];

  const [colorIndex, setColorIndex] = useState(0);

  const handleColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <>
      <div
        className="h-screen w-dvw flex flex-col items-center justify-center"
        style={{

          backgroundColor: colors[colorIndex],
        }}
      >

        <h1> {colors[colorIndex]}</h1>


        <button
          onClick={handleColor}
          style={{
            backgroundColor: "#fff",
          }}
        >
          Cambiar Color
        </button>


      </div>
    </>
  );
};

