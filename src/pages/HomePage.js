import React from 'react'
import axios from 'axios';
import Search from '../components/Search';

const HomePage = () => {

  const auth  = "URFWUp7CORPNLMLr1bKuU7HZBFEd5zH45AqJUD5kQ8ENSbi72olUCFeJ";

  return (
    <div style={{minHeight: "100vh"}}>
      <Search />
    </div>
  )
}

export default HomePage
