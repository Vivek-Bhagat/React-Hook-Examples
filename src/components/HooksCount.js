import { useState } from "react";
import React  from 'react'

function HooksCount() {

    const [count, setCount] = useState(0);

  return (
      <div>
          <br/>
     this count is done with the help of the Hooks 
      <div>
              <button onClick={() => setCount(count + 1)}>Count {count}</button>
      </div>
    </div>
  );
}

export default HooksCount