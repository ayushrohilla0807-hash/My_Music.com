import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor] = useState("olive")

  return (
   <div className="w-full h-screen duration-150"
   style={{backgroundColor:color}}>

    <div className='fixed flex flex-wrap justify-center
    bottom-12 px-2 inset-x-0 '> 
    
    <div className='flex flex-wrap p-2 justify-center iteam-center gap-4 bg-amber-50 rounded-2xl'>
       
    <button className='text-black bg-amber-50 outline-none px-4 rounded-full ' style={{backgroundColor: 'red'}} onClick={()=>setcolor("red")}> Red</button>
    <button className='text-black bg-amber-50 outline-none px-4 rounded-full ' style={{backgroundColor: 'blue'}} onClick={()=>setcolor("blue")}> Blue</button>
    <button className='text-black bg-amber-50 outline-none px-4 rounded-full ' style={{backgroundColor: 'orange'}} onClick={()=>setcolor("orange")}> Orange</button>
    <button className='text-black bg-amber-50 outline-none px-4 rounded-full ' style={{backgroundColor: 'yellow'}} onClick={()=>setcolor("yellow")}> Yellow</button>
    <button className='text-black bg-amber-50 outline-none px-4 rounded-full ' style={{backgroundColor: 'green'}} onClick={()=>setcolor("green")}> Green</button>
    <button className='text-black bg-amber-50 outline-none px-4 rounded-full ' style={{backgroundColor: 'Pink'}} onClick={()=>setcolor("Pink")}> Pink</button>
    <button className='text-black bg-amber-50 outline-none px-4 rounded-full ' style={{backgroundColor: 'Purple'}} onClick={()=>setcolor("Purple")}> Purple</button>
    
    

       </div>
    </div>
   </div>
  )
}

export default App