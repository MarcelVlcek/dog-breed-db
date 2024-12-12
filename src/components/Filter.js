import { useState, useEffect } from "react"
import MoreInfo from "./MoreInfo"




const Filter = () => {
    const [dogBreed, setDogBreed] = useState([])
    const [searchingText, setSearchingText] = useState('')
    const [filterBreed, setFilterBreed] = useState([])

    const url = 'https://api.thedogapi.com/v1/breeds'

    const getBreedNames = async() => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
       
        
        const shuffledBreeds = data.sort(() => 0.5 - Math.random())
        const randomBreeds = shuffledBreeds.slice(0, 10)
    
      setDogBreed(randomBreeds)
       
    }
useEffect( () => {
    getBreedNames()
}, [])

useEffect( () => {
    let breedAfterFilter = dogBreed.filter( (oneBreed) => {
        return oneBreed.name.toLowerCase().includes(searchingText.toLocaleLowerCase())
    })
    setFilterBreed(breedAfterFilter)
}, [searchingText, dogBreed])


  return (
    <>
    <form >
        <input type="text" placeholder="Breed name"  onChange={ 
                    (e) => {setSearchingText(e.target.value)} }/>
    </form>
    {
        filterBreed.map( (oneBreed) => {
            const {id, name, } = oneBreed
            
            return <div key={id}> 
            <h2>{name}</h2>
            <MoreInfo></MoreInfo>
            </div>
        } )
    }
   



    </>
  )
}

export default Filter