import React, { useState, useEffect }from "react";
import Hello from "./Hello"
import {useFetch} from "./useFetch"
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });

// const [showHello, setShowHello] =  useState(true)


const [count, setCount] = useState(() => 
JSON.parse(localStorage.getItem("count"))
)
const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)
useEffect(()=>{
  localStorage.setItem("count",JSON.stringify(count))
},[count])
  return (
    <div>
      <div>{!data ? 'loading...': data}</div>
      <div>count: {count}</div>
      <button onClick = {()=>setCount(c => c + 1)}>increment</button>
      <>
      {/* <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {showHello && <Hello />} */}
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

export default App;
