import { useState } from 'react'

function App() {
  const [dogImage, setDogImage] = useState("")
  const [breed, setBreed] = useState("husky")

  // TODO: Add an effect that runs once on mount to fetch a random dog image from https://dog.ceo/api/breeds/image/random

  // TODO: Add an effect that runs when breed changes to fetch that breed's image from https://dog.ceo/api/breed/${breed}/images/random

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
