import { useState } from 'react'
import './App.css'


function App() {
  const [Color, setColor] = useState("olive")
  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor:Color}} >
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
  <div className="flex  flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
<button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full bg-red-700 text-white shadow-lg'>Red</button>
<button onClick={() => setColor("Purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"Purple"}}>Purple</button>
<button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"Green"}}>Green</button>
<button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"Blue"}}>Blue</button>
<button onClick={() => setColor("teal")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"teal"}}>Teal</button>
<button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"Orange"}}>Orange</button>
<button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"black"}}>black</button>
<button onClick={() => setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'style={{backgroundColor:"white"}}>white</button>

  </div>
</div>
    </div>
    </>
  )
}

export default App
