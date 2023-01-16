import React from 'react'

const Filter = ({filterInput, setFilterInput}) => {
  
    const filterInputHandler = (e) => {
        console.log(e.target.value);
        setFilterInput(e.target.value);
  } 
  
    return (
    <div classname="filterinput">
    <input onChange={filterInputHandler} value={filterInput}/>
    </div>
  )
}

export default Filter