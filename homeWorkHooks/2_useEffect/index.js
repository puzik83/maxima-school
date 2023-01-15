// Реакт хук useEffect может имитировать некоторые методы жизненного цикла классовых React компонентов и сделать что-то похожее
// Все зависит от параметров использования useEffect
// Задача:
// Дополнить код console.log-ами. Вывести названия сопоставимых методов-аналогов жизненного цикла где указано

import { useState, useEffect } from "react";

function Timer({prop}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
        clearTimeout(Timer);
        console.log("ComponentWillUnmount, удаление компонента")
    }
  });

  // Без параметров
  useEffect(() => {
    console.log("ComponentDidUpdate, выполнится на каждый рендер");
  });

  // Пустой массив
  useEffect(() => {
    console.log("ComponentDidMount, выполнится на первый рендер");
  }, []);
  
  // Массив зависимостей
  useEffect(() => {
    console.log("ComponentDidUpdate, выполнится на любые изменения зависимостей")
  }, [prop, count]);



  return <h1>I've rendered {count} times!</h1>;
}