import { Header } from "./Header/Header"
import { RickAndMorty } from "./pages/Home/RickAndMorty"
import { Routes,Route } from "react-router-dom"

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RickAndMorty />} />
      </Routes>
    </>
  )
}

