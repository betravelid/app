import { useState } from 'react'
import reactLogo from './assets/images/gambar1.jpeg'
// import viteLogo from '/vite.svg'
import viteLogo from './assets/images/favicon.png'
import './App.css'
import WhatsApp from './components/WhatsApp'
import { Hero } from './components/Hero'
import { Card } from './components/Card'
// import ContactMap from './components/ContactMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <Hero />
      <Card />

    </div>
  )
}

export default App
