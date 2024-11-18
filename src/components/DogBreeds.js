import { useState, useEffect } from 'react'
import '../css/DogBreed.css'

const DogBreeds = () => {
  const url = "https://api.thedogapi.com/v1/breeds"
  
  const [dogBreeds, setDogBreeds] = useState([])  
  
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

  return (
    <div>
      
      {dogBreeds.map((breed, index) => (
        <p className="dog-breed-item" key={index}>{breed.name}<button>show more</button></p>  
      ))}
    </div>
  )
}

export default DogBreeds
