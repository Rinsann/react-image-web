import React ,{useState} from 'react'
import axios from 'axios';

import Search from '../components/Search';
import Picture from '../components/Picture';

const HomePage = () => {
  let [data,setData] = useState(null);

  const auth  = "URFWUp7CORPNLMLr1bKuU7HZBFEd5zH45AqJUD5kQ8ENSbi72olUCFeJ";
  const initialURL = "https://api.pexels.com/v1/curated?page=1";

  const search = async ()=>{
    let result = await axios.get(initialURL,{headers:{Authorization:auth}});
    console.log(result)
    setData(result.data.photos);
  }

  return (
    <div style={{minHeight: "100vh"}}>
      <Search search={search} />
      <div className='pictures'>
        {data && data.map(d => {
          return <Picture data={d} />
        })}
      </div>
    </div>
  )
}

export default HomePage
