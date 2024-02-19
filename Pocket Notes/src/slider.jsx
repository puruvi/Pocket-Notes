import React, { useState } from 'react'

const slider = ({createNewGroup,color}) => {
  // let [ar,setarr]=useState(data);
  let [ar,setarr]=useState(null);
  function clicked(){
  console.log(createNewGroup)
  // setarr(...ar,data)
  console.log(ar)
      
  }
  return (
    <div className='slider'>
      <h2>Pocket Notes</h2>
      <button onClick={clicked}>clicked</button>
    </div>
  )
}

export default slider