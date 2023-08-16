import React, { useState } from 'react'

function HooksCounter3() {
    const [items, setItems] = useState([])

    const addItems = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() *10 )+1
        }])
    }
  return (
      <div>HooksCounter3
          <br />
          <button onClick={addItems}>Add a number</button>
          <ul>
              {items.map(item => (
                  <li key={item.id}>{item.value}</li> 
              ))}
          </ul>
    </div>
  )
}

export default HooksCounter3
