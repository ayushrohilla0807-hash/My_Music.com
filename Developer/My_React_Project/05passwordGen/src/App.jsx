import { useCallback, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";

export default function App() {

  const [length,setlength] = useState(8)
  const [AllowNumber,setAllowNum] = useState(false)
  const [AllowChar,setAllowChar] = useState(false)
  const [password,setPassword] = useState("")
  const [copied, setCopied] = useState(false)


  const passGen = useCallback(()=>{
    let pass =''
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYX"

    if (AllowNumber) str += '123456789'
    if (AllowChar) str += "@!#$%&*~{}[]|:?`₹"

    for(let i=0; i<length; i++){
      let char = Math.floor(Math.random()* str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,AllowChar,AllowNumber,setPassword])

  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
  
    setTimeout(() => {
      setCopied(false)
    }, 800)
  }

  useEffect(()=>{
    passGen()
  },[AllowChar,AllowNumber,length,passGen])

  return (
  <>
  <div className="max-w-md w-full mx-auto shadow-md rounded-lg 
  px-4 my-8 text-orange-500 bg-slate-800 ">

  <h2 className='text-center text-4xl'>Password Generater</h2>

  <div className='bg-amber-50 mt-4 rounded-2xl  flex shadow w-full '>
  <input
  type='text'
  value={password}
  className='outline-none w-full px-2 py-3'
  placeholder='Password'
  readOnly
  />
  <button
  onClick={copyPassword}
  className="bg-cyan-600 px-3 outline-none text-black rounded-r-2xl"
>
  {copied ? "Copied!" : "Copy"}
</button>

  </div>

  <div className='flex text-sm gap-x-2 '>
    <div className="flex items-center gap-x-1">
      <input type="range" min={4} max={100} value={length}
       className='cursor-pointer mt-3 mb-2' onChange={(e) => {setlength(Number(e.target.value))}} />
      <label>Length: {length}</label>

    </div>
    <div className="flex items-center gap-x-1">

      <input type="checkbox"
      defaultChecked = {AllowNumber}
      id='numberInput'
      onChange={()=>
      {
        setAllowNum(prev =>!prev)
      }} />

      <label htmlFor="numberInput">Number</label>
    </div>

    <div className="flex items-center gap-x-2">
      <input type="checkbox"
      defaultChecked = {AllowChar}
      id='charInput'
      onChange={()=>
      {
        setAllowChar(prev =>!prev)
      }} />
      <label htmlFor="charInput">Char</label>
    </div>
    </div>
  </div>

  </>
    
  );
}
