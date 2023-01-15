//Состоянние можно хранить в нескольких отдельных переменных, А можно объединить все в один объект
//Перепишите код так, чтобы состояние хранилось в одном объекте
//Добавьте кнопку, при нажатии на которую изменится color на Silver

import { useState } from "react";

function Laptop() {
  const [laptop, _setLaptop] = useState({
    brand: "Apple",
    model: "Macbook Pro",
    year: "2023",
    color: "Space Grey"
  });


const [_color, setColor] = useState("space grey");
   

  return (
    <>
      <h1>My lapop is {laptop.brand}</h1>
      <p>
        It is a {laptop.color} {laptop.model} from {laptop.year}.
      </p>
      <button onClick={() => {setColor("silver")}}>Change laptop color</button>
    </>
  )
}

export default Laptop;