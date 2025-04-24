import { useState, useEffect } from 'react'

function App() {
  const [dogImage, setDogImage] = useState("")
  const [breed, setBreed] = useState("husky")

  // On mount, fetch a random dog image
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        setDogImage(data.message)
      })
  }, []) // Empty dependency array: only runs once, on mount

  // When breed changes, fetch a specific breed image
  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.json())
      .then(data => {
        setDogImage(data.message)
      })
  }, [breed]) // Runs whenever breed state changes

  const handleBreedChange = () => {
    const breeds = ["husky", "beagle", "boxer", "dalmatian"]
    const randomBreed = breeds[Math.floor(Math.random() * breeds.length)]
    setBreed(randomBreed)
  }

  return (
    <div className="App">
      <h1>Dog Image Viewer</h1>
      <p>Current breed: {breed}</p>
      <button onClick={handleBreedChange}>Change Breed</button>
      
      <img 
        src={dogImage} 
        alt="Random dog" 
        style={{ maxWidth: "500px", marginTop: "20px" }} 
      />
    </div>
  )
}

export default App
