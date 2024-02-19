import Screen from "./screen"
import Slider from "./slider"
import './home.css'
import { useState } from "react"

import CreateNewGroup from './createNewGroup'

function App() {
  const [visibility,setvisibility]=useState(false)
  function createNewGroup(){
    setvisibility(!visibility)
  }
  let [data,setdata]=useState({
    createNewGroup:'',
    color:''})
  function datahandler(e){
    setvisibility(!visibility)
    }
  return (
    <>
    <div className="home">
    <div><Slider obj={data}/></div> 
    <div><Screen/></div> 
    {visibility&&  <div className='createNewGroup'>
      <h1>Create New Group</h1>
      <div><h2>Group Name <input type="text"value={data.createNewGroup} onChange={(e)=>setdata({...data,createNewGroup:e.target.value})} /></h2></div>
      <h2>Choose color <input type="color" value={data.color} onChange={(e)=>setdata({...data,color:e.target.value})}/>
      
      </h2>
      <button on onClick={datahandler}>createNewGroup</button>
    </div> }
    <button id='add' on onClick={createNewGroup}>+</button>
    
    </div>
    </>
  )
}

export default App
