import { useEffect, useState } from 'react'
import './App.css'
import ArtisansList from './components/artisans/ArtisansList'

function App() {
  // On prépare l'état local (la variable) qui va stocker les composants
  const [artisans, setArtisans] = useState([])

  useEffect(() => {
    // On récupère les données
    const getData = async () => {
      const response = await fetch('http://localhost:1337/api/artisans')
      const responseData = await response.json()
      setArtisans(responseData.data)
    }
    getData()
  }, [])

  return (
    <>
      <ArtisansList artisans={artisans} />
    </>
  )
}

export default App
