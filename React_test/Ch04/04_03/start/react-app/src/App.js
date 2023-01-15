import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello from React</h1>
    </div>
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
