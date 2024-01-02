import React ,{useEffect, useState} from 'react'
import axios from 'axios';

import Search from '../components/Search';
import Picture from '../components/Picture';

const HomePage = () => {
  let [input,setInput] = useState("");
  let [data,setData] = useState(null);

  const auth  = "URFWUp7CORPNLMLr1bKuU7HZBFEd5zH45AqJUD5kQ8ENSbi72olUCFeJ";
  const initialURL = "https://api.pexels.com/v1/curated?page=1";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async (url) => {
    let result = await axios.get(url,{headers:{Authorization:auth}});
    setData(result.data.photos);
  }

  useEffect(()=>{
    search(initialURL)
  },[])

  return (
    <div style={{minHeight: "100vh"}}>
      <Search search={() => {
        search(searchURL);
      }} setInput={setInput} />
      <div className='pictures'>
        {data && data.map(d => {
          return <Picture data={d} />
        })}
      </div>
    </div>
  )
}

export default HomePage
