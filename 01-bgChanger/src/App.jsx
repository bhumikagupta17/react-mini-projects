import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("olive");
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='flex flex-wrap fixed justify-center
      bottom-12 inset-x-0 px-2'>
        <div className='flex justify-center shadow-xl bg-white
        gap-3 px-3 py-2 rounded-2xl '>
          <button onClick={()=>setColor("red")}
          className='outline-none px-4 py-1 rounded-2xl bg-red-500 text-white'>Red</button>
          <button onClick={()=>setColor("green")}
          className='outline-none px-4 py-1 rounded-2xl bg-green-500 text-white'>Green</button>
          <button onClick={()=>setColor("blue")}
           className='outline-none px-4 py-1 rounded-2xl bg-blue-500 text-white'>Blue</button>
           <button onClick={()=>setColor("purple")}
           className='outline-none px-4 py-1 rounded-2xl bg-purple-500 text-white'>Purple</button>
           <button onClick={()=>setColor("black")}
           className='outline-none px-4 py-1 rounded-2xl bg-black text-white'>Black</button>
           <button onClick={()=>setColor("yellow")}
           className='outline-none px-4 py-1 rounded-2xl bg-yellow-500 text-white'>Yellow</button>
           <button onClick={()=>setColor("pink")}
           className='outline-none px-4 py-1 rounded-2xl bg-pink-500 text-white'>Pink</button>
           <button onClick={()=>setColor("orange")}
           className='outline-none px-4 py-1 rounded-2xl bg-orange-500 text-white'>Orange</button>
        </div>

      </div>
    </div>
  )
}

export default App
