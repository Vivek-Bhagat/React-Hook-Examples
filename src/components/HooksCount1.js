import React, { useState } from "react";

function HooksCount1() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  let incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);//prevCount is th argument that hasd the value of the previous count and passes the value to the function and increment it by the one
    }
    };
    
    let decrementFive = () => {
        for (let i = 0; i < 5; i++){
          setCount(prevCount => prevCount - 1);
          //prevCount is th argument that hasd the value of the previous count and passes the value to the function and increment it by the one
        }
    }
  return (
    <div>
      <h1>
        Incrementing and decrementing the value of the count using the buttons
      </h1>
      <br />
      Count: {count}
      <button onClick={() => setCount(initialCount)}> Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
      <button onClick={decrementFive}>Decrement 5</button>
    </div>
  );
}

export default HooksCount1;
