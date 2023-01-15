import './App.css';
//import { useState } from "react";
//import { useState, useEffect} from "react";//emotion and state creation

//const [firstCity, second] = ["Tokyo", "Paris", "London"];

//console.log(firstCity);
//console.log(second);

// function App() {
//   const [emotion, setEmotion] = useState("happy");
//   const [secondary, setSecondary] =
//     useState("tired");

//   useEffect(() => {
//     console.log(`It's ${emotion} right now.`);
//   }, [emotion]);

//   useEffect(() => {
//     console.log(`it's ${secondary} around here!`);
//   }, [secondary]);

//   return (
//     <div className="App">
//       <h1>Current emotion is {emotion}</h1>
//       <button onClick={() => setEmotion("sad")}>Sad</button>
//       <button onClick={() => setEmotion("excited")}>Excited</button>
//       <button onClick={() => setEmotion("delighted")}>Delighted</button>
//       <h2>Current secondary emotion is {secondary}.
//       </h2>
//       <button onClick={() => setSecondary("greatful")}>Grateful
//       </button>
//     </div>
//   );
// }

// function App() {
// const [checked, setChecked] = useState(false);
//   return (
//     <div className="App">
//       <input 
//       type="checkbox" 
//       value={checked} 
//       onChange={() => 
//         setChecked((checked) => !checked)
//       }
//       />
//       <label>
//       {checked ? "checked" : "not checked"}
//       </label>
//     </div>
//   );
// }
//import { useReducer } from "react";//checked buttom creation

//function App() {
//   const [checked, setChecked] = useReducer(checked => !checked);
//     return (
//       <div className="App">
//         <input 
//         type="checkbox" 
//         value={checked} 
//         onChange={setChecked}
//         />
//         <label>
//         {checked ? "checked" : "not checked"}
//         </label>
//       </div>
//     );
//  }


//useRef is used for uncontrolled components.
import { useRef} from "react";//reaching out an individual element checking what it's value is.

function App() {
    const txtTitle = useRef();
    const hexColor = useRef();

    console.log(txtTitle);
    const submit = (e) => {
      e.preventDefault();
      const title = txtTitle.current.value;
      const color = hexColor.current.value;
      alert (`${title}, ${color}`);
      txtTitle.current.value = "";
      hexColor.current.value = "";
    };// prevent default submitting of the form
    return (
   <form onSubmit={submit}>
    <input 
    ref={txtTitle}
    type="text" 
    placeholder="color title..." 
    />
    <input ref={hexColor} type="color" />
    <button>ADD</button>
   </form>
    );
}

import { useState } from "react";

function Laptop() {
  const [laptop, setLaptop] = useState({
    brand: "Apple",
    model: "Macbook Pro",
    year: "2023",
    color: "Space Grey"
  });

  function changeColor() {
    setLaptop(prevLaptop => {
        return {
            prevLaptop, color: "Silver"
        }
    });
  }

  return (
    <>
      <h1>My lapop is {laptop.brand}</h1>
      <p>
        It is a {laptop.color} {laptop.model} from {laptop.year}.
      </p>
      <button onClick={changeColor}>Change color</button>
    </>
  )
}

export default App;
