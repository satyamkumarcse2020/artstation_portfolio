import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Use react-router-dom instead of react-router
import PropsImageComp from './components/PropsImageComp'
import PropsImageView from './components/propsImageView'
import Props from './components/Props'
import About from './components/About'
import ProfileTopCard from './components/ProfileTopCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter basename="/artstation_portfolio">
  <Routes>
    <Route path="/" element={<><Navbar /></>} />
    <Route path="/a" element={<PropsImageView />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
