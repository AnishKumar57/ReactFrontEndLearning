import React, { useEffect, useState } from 'react';
 

function Counter() {
  // tot level management
  const [count, setCount] = useState(0);
  
  // // Similar to componenetDidMount
  // // It will run only one time

  // useEffect(function() {
  //   console.log('this only runs one time after component mount');
  //   document.title = `You clicked ${count} times `
  // },
  // []) // use effect called with empty dependancy array.


  // Similar to componentDidUpdate

  // useEffect(function() {
  //   console.log('this only runs one time after component mount');
  //   document.title = `You clicked ${count} times `
  // },
  // [count]) // with dependency array 


  // Similar to componentWillUnmount

  useEffect(() => {
    return () => {
      console.log("Component will unmounts runs")

    }
  }, []) //empty dependency array

  
  
  
  const increment = ()=> {
      setCount(count+1)
  }
   return(
    <div style ={{margin: '20px'}}>
    <h1>{count}</h1>
    <button onClick= {increment}>+</button>
    </div>
   )
}

export default function App() {
  const [showCounter, setShowCounter] = useState(false)
  
  
  
  return(
    <div className="app">
  

      {showCounter && <Counter/> }
      
      <br></br>
      <br></br>
        <button onClick= {() =>setShowCounter(true)}>Mount</button>
  
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  
        <button onClick= {() =>setShowCounter(false)}>UnMount</button>
      
    </div>
  );  
}