import { useState } from "react";

export const Color = () => {
  const colors = ["#1a1a1a", "#ffcc00", "#ff5733", "#33ff57", "#5733ff", "#ff33a1"];
  const [colorIndex, setColorIndex] = useState(0);

  const handleColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <>
      <main
        style={{
            height: "100wh",
          backgroundColor: colors[colorIndex],
        }}
      >
        <button
          onClick={handleColor}
          style={{
            backgroundColor: "#fff",
          }}
        >
          Cambiar Color
        </button>
      </main>
    </>
  );
};

