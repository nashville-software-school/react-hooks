import { useState } from 'react'
import './App.css'

function App() {
  const [dogImage, setDogImage] = useState("")
  const [breed, setBreed] = useState("husky")
  const [allBreeds, setAllBreeds] = useState(["husky","otterhound","dalmation"])

  //TODO: On mount, fetch all available breeds

  //TODO: When breed changes, fetch a specific breed image

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
          <img
            src={dogImage}
            alt={`${breed} dog`}
            className="dog-image"
          />
        </div>
      </div>
    </div>
  )
}

export default App
