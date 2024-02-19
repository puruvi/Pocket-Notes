import {useState} from 'react'


const createNewGroup = () => {
  let [data,setdata]=useState({
    createNewGroup:'',
    color:''})
 let [sav,setsav]=useState([])
  function datahandler(e){
    sav.push(data)
    }
  return (
    <div className='createNewGroup'>
      <h1>Create New Group</h1>
      <div><h2>Group Name <input type="text"value={data.createNewGroup} onChange={(e)=>setdata({...data,createNewGroup:e.target.value})} /></h2></div>
      <h2>Choose color <input type="color" value={data.color} onChange={(e)=>setdata({...data,color:e.target.value})}/>
      
      </h2>
      <button on onClick={datahandler}>createNewGroup</button>
    </div>
  )
}

export default createNewGroup