import { useState } from 'react';
import './App.css'


function App(){
  const [count, setCount] = useState(0)
  return(
    <>
    <h1>My Counter App</h1>
    <div className='couner-box'>
    <h2>{count}</h2>
    </div>
    <div className='button'>
    <button onClick={() => setCount(count + 1)}>
      Increase by 1
    </button>
     <button onClick={() => setCount(Math.max(0, count - 1))}>
      Decrease by 1
    </button>
     <button onClick={() => setCount(count + 5)}>
      Increase by 5
    </button>
     <button onClick={() => setCount(Math.max(0, count - 5))}>
      Decrease by 5
    </button>
     <button className='reset-btn' onClick={() => setCount(0)}>
      Reset
    </button>
    </div>
    </>
  )
}
export default App
