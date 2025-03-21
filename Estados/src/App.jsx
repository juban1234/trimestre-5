import { Header } from "./components/layauts/Header/Header"
import { Home } from "./Home/Home"
import { Color } from "./pages/Color/Color"



export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actividad1" element={<Color />} />
        <Route path="/Actividad2" element={<cla/>} />
      </Routes>
    </>
  )
}

