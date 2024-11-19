import { useState, useEffect } from 'react'
import '../css/DogBreedsWithFIlter.css'

const DogBreedsWithFilter = () => {

  const url = "https://api.thedogapi.com/v1/breeds"
  
  const [dogBreeds, setDogBreeds] = useState([])  
  const [searchTerm, setSearchTerm] = useState('')
  
  const getBreed = async () => {
    const response = await fetch(url, {
      headers: {
        'x-api-key': 'live_SuYPHKLerg5vyOCBxpw08WTn8UWjmClTAyDquG1l3MV3uhuXMXcKAn51T4Un2Q0m'  
      }
    })
    
    const data = await response.json()

    const shuffledBreeds = data.sort(() => 0.5 - Math.random())
    const randomBreeds = shuffledBreeds.slice(0, 10)

  setDogBreeds(randomBreeds)

    
  }


  useEffect(() => {
    getBreed()  
  }, [])  

  const filteredBreeds = dogBreeds.filter((breed) => 
    breed.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  )

  return (
    <div>
      <form>
        <label htmlFor="searchInput">Filter by breed name</label>
        <input
          id="searchInput"
          type="text"
          placeholder="Breed name"
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </form>

      <div>
        {filteredBreeds.map((breed, index) => (
          <p className="dog-breed-item" key={index}>
            <strong>{breed.name}</strong>
            <button>show more</button>
          </p>
        ))}
      </div>
    </div>
  )
}

export default DogBreedsWithFilter
