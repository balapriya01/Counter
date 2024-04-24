import "./App.css";
import {useState} from 'react';

//We can use hooks only inside functional components.
const App = () => {

  function countValue(){
    console.log("Hello");
    return 1;
  }

  //Hooks must run in the exact same order as they are written
  //Hooks cannot be written inside if statements, loops, or anything that is being nested
  //They must be at the top level
  //We can initialize the states via two types, 
  //1. Hard coded, 2. Function version.
  //Hard coded -> It will re-render our app multiple times.
  //Function version -> It will reder our application only once, this is used when we have a complex app (preferred.)
  // const [count, setCount] = useState(countValue()); //<= This will render multiple times.

  const [count, setCount] = useState(() => countValue()) // <= This renders only once.(preferred)


  //Increase the count
  function handleplus(){
    // setCount(count + 1); //This way is generally not recommended.
    setCount((count) => count + 1); // We should always pass a function inside a function so that it's prevState is also reserved.
    
  }


  //Decreses the count
  function handleminus(){
    setCount((count) => count - 1);
  }


  return (
    <>
      <div className="app-con">
        <div className="container">
        <button onClick={handleminus} className="minus">Minus</button>
          <span className="count">{count}</span>
          <button onClick={handleplus} className="plus">Plus</button>
        </div>
      </div>
    </>
  );
};

export default App;
