import {useState, useEffect} from 'react';


export default function useFetchData(url) {

  const [data, setData] = useState([]);
  console.log(data);

  useEffect( () => {
    fetch(url)
      .then((response) => response.json())
      .then(data => {
        setData(data)
    
      })
    
    }, [url])
    
    return [data];

}