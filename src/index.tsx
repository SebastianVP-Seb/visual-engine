import React, { useState } from 'react';

const Element1 = () => {

  const [count, setCount]=useState(0);

  const addingUp=()=>setCount(count+1);

  const subtracting=()=>setCount(count-1);

  return (
    <>
      <p>El contador va en {count}</p>
      <button onClick={addingUp}>Sumar</button>
      <button onClick={subtracting}>Restar</button>
    </>
  )
}

export default Element1