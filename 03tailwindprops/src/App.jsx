import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    name : 'Pa One',
    age : 21,
  }
  let newArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Tailwind Cards</h1>
      <Card username = "Pa One" btnText = "Github" />
      <Card username = "Ra One" btnText = "Code Forces" /> 
      <Card username = "G One"  someObj = {myObj} />
    </>
  ) // both are valid // btnText = "Leetcode"
}

export default App
