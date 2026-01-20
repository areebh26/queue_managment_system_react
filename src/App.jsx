import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputForm from './components/inputForm'
import QueueDisplay from './components/queueDisplay'

function App() {
  

  return (
    <>
    <div className='main-container'>
          <h1>Queue Management System</h1>
          <p>Manage your customers efficiently</p>
          <div className='flex-container'>
            <InputForm></InputForm>
            <QueueDisplay></QueueDisplay>
          </div>
          
   </div>
  
    </>
  )
   
}

export default App
