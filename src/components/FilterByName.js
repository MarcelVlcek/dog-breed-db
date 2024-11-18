import React from 'react'
import '../css/FilterByName.css'

const FilterByName = () => {
  return (
    <form>
        <label htmlFor='searchInput'>Filter by breed name</label>
        <input id='searchInput' type="text" />
    </form>
  )
}

export default FilterByName