import React from 'react'
import axios from 'axios';

const Search = () => {

  const auth  = "URFWUp7CORPNLMLr1bKuU7HZBFEd5zH45AqJUD5kQ8ENSbi72olUCFeJ";
  const initialURL = "https://api.pexels.com/v1/curated?page=1"

  const search = async ()=>{
    let result = await axios.get(initialURL,{headers:{Authorization:auth}});
    console.log(result)
  }

  return (
    <div className='search'>
      <input className='input' type="text" />
      <button onClick={search}>Search</button>
    </div>
  )
}

export default Search
