import { useState } from "react";



export const PageMode = () => {

    const mode= [
        "#fff", // light
        "#000"  // dark
    ]

    const [colorIndex, setColorIndex] = useState(0);
    

    const modeColor = () =>{
        setColorIndex((prevIndex) => (prevIndex + 1) % mode.length);
    }

  return (
    <>
    <button
        onClick={modeColor}
        style={{
            backgroundColor: mode[colorIndex],
        }}
    >
        darkMode
    </button>
    </>
  )
}
