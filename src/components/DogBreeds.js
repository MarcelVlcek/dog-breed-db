
const DogBreeds = () => {
  const url = "https://api.kanye.rest/"
  const getBreed = async () => {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data["quote"])
  }
  getBreed()

  return (
    <div>DogBreeds</div>
  )
}

export default DogBreeds