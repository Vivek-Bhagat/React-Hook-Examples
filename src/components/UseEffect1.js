import React,{useState, useEffect} from 'react'

export default function UseEffect1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log('useEffect - updating document title') //it also updates whenever the user type the message in the input
        document.title = `You clicked ${count} times`
    }, [count])//to not update the message use the array count i.e [count]
  return (
      <div>
          <input type='text' value={name} onChange={e => setName(e.target.value)} />
          <button onClick={() => setCount(count+1)}>Count {count} times</button>
          
    </div>
  )
}
