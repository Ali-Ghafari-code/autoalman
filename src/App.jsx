import Nav from "./components/Nav"
import { Route, Routes } from "react-router-dom"
import About from "./page/about"
import Contact from "./page/Contact"
import CarParts from "./page/CarParts"
import Homepage from "./page/Homepage"
import Signup from "./page/Signup"
import Login from "./page/Login"


function App() {
  return (
  <div>
      <Nav/>
      <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/carParts" element={<CarParts/>} />
          <Route path="/home" element={<Homepage/>} />
      </Routes>
  </div>
  )
}

export default App
