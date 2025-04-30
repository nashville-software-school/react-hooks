import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [dogImage, setDogImage] = useState("")
  const [breed, setBreed] = useState("husky")
  const [allBreeds, setAllBreeds] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  // On mount, fetch all available breeds
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => {
        // Convert breeds object to array of breed names
        const breedList = Object.keys(data.message)
        setAllBreeds(breedList);
      })
  }, []) // Empty dependency array: only runs once, on mount

  // When breed changes, fetch a specific breed image
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.json())
      .then(data => {
        setDogImage(data.message)
        setIsLoading(false);
      })
  }, [breed]) // Runs whenever breed state changes

  const handleBreedChange = (event) => {
    setBreed(event.target.value)
  }

  return (
    <div className="App">
      <div className="top-panel">
        <h1>Dog Image Viewer</h1>
        <div className="form-group">
          <label htmlFor="breed">Select Breed:</label>
          <select
            id="breed"
            value={breed}
            onChange={handleBreedChange}
          >
            {allBreeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bottom-panel">
        <h2>Selected Breed: {breed}</h2>
        <div className="image-container">
          { isLoading ?
            <p>Loading</p>
            :
            <img 
              src={dogImage} 
              alt="Random dog" 
              style={{ maxWidth: "500px", marginTop: "20px" }} 
            />
          }
        </div>
      </div>
    </div>
  )
}

export default App
