import React from 'react'

const Cockpit =(props) => {
  return(
    <div>
      <h1>Hi, I am React App!</h1>
      <button
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  )
}



export default Cockpit
