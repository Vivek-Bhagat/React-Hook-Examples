import React, {useState, useEffect} from 'react'

export default function UseEffect2() {
    const [x, setX] = useState(0); //setting the initial value to be zero
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEfect called');
        window.addEventListener('mousemove', logMousePosition)
    },[])
  return (
      <div>
          Position X = {x} and Y = {y}
    </div>
  )
}
