//Из компонента Component1 в компонент Component5 по цепочке друг за другом передается prop user
//Избавиться от передачи prop из компонента в компонент Через React контекст

import { useState, createContext, useContext } from "react";

const UserContext = createContext();


function Component1() {
  const [user, setUser] = useState("Herman Gref");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5({ user }) {
    const user = useContext(UserContext);
    
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

// ReactDOM.createRoot(document.getElementById("root"))
// .render(<Component1 />);