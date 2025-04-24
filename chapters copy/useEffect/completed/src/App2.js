import { useState, useEffect } from 'react'

function App() {
  const [dogImage, setDogImage] = useState("")
  const [breed, setBreed] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let url = "https://dog.ceo/api/breeds/image/random"
    if (breed) url = `https://dog.ceo/api/breed/${breed}/images/random` 
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDogImage(data.message)
        setIsLoading(false);
      })
  }, [breed]);

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
      
      {isLoading ?
        <p>Loading</p>
        :
        <img 
          src={dogImage} 
          alt="Random dog" 
          style={{ maxWidth: "500px", marginTop: "20px" }} 
        />
      }
      
    </div>
  )
}

export default App
