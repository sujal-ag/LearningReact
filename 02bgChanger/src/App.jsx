import { useState } from 'react'

function App() {
  const [color, setColor] = useState("red")
  
  return (
    <div className='w-full h-screen duration-1000 flex flex-wrap justify-center items-center' style={{backgroundColor: color}}>
      <div className='text-white flex flex-wrap gap-4 justify-center'>
        <button onClick={() => setColor("red")} style={{backgroundColor: "red"}} className='text-white border border-white px-4 py-2 rounded'>Red</button>
        <button onClick={() => setColor("green")} style={{backgroundColor: "green"}} className='text-white border border-white px-4 py-2 rounded'>Green</button>
        <button onClick={() => setColor("blue")} style={{backgroundColor: "blue"}} className='text-white border border-white px-4 py-2 rounded'>Blue</button>
        <button onClick={() => setColor("yellow")} style={{backgroundColor: "yellow"}} className='text-white border border-white px-4 py-2 rounded'>Yellow</button>
        <button onClick={() => setColor("orange")} style={{backgroundColor: "orange"}} className='text-white border border-white px-4 py-2 rounded'>Orange</button>
      </div>
    </div>
  )
}

export default App
