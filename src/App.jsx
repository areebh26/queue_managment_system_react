import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputForm from './components/inputForm'
import QueueDisplay from './components/queueDisplay'

function App() {
  let [queue, setQueue] = useState([]);
  function addToQueue(customer){
    setQueue([...queue,customer])
  }
function removeFromQueue(id){
    setQueue(queue.filter((customer)=>
       customer.id!==id
    ))
  }

function updateStatus(id,newStatus){
    setQueue(queue.map((customer) =>
  customer.id === id ? { ...customer, status: newStatus } : customer
));

}


  return (
    <>
    <div className='main-container'>
          <h1>Queue Management System</h1>
          <p>Manage your customers efficiently</p>
          <div className='flex-container'>
            <InputForm addToQueue={addToQueue}></InputForm>
            <QueueDisplay queue={queue}
            removeCustomer={removeFromQueue}
            changeStatus={updateStatus}></QueueDisplay>
          </div>
          
   </div>
  
    </>
  )
   
}

export default App
