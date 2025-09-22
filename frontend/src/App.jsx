import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Header from './components/Header'; 

function App() {
  const [,] = useState(0)

  return (
    <>
      <Header leftText="Assasins Creed Smurfs"
/>
      <Cards />
    </>
  )
}

export default App