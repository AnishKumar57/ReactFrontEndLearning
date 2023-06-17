import React, {useState, useEffect} from 'react';
import useFetchData from './components/customHooks/useFetchData';


export default function App() {
  
  const [userData] = useFetchData("https://jsonplaceholder.typicode.com/users");

  const [dogData] = useFetchData("https://dog.ceo/api/breeds/image/random");
  console.log(dogData);


  return(
    <div>
       
       <h1>Name: {userData[0]?.name}</h1>
       <p>Email: {userData[0]?.email}</p> 
       <img src={dogData?.message} height="400px" width = "400px"/>
      
        
    </div>

  );
}