import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"

const Adder = () => {
  const numbers  = useSelector((state) => state.numbers);
  const [ input, setInput ] = useState(0);
  const dispatch = useDispatch();

  const setNewNumber = () => {
    dispatch({
      type: 'SET_NEW_NUMBER',
      data: input
    })
  }

  const remove = () => {
    dispatch({
      type: 'REMOVE'
    })
  }
  
  return (
    <div>
      <h1>Numbers</h1>
      <ul>
        {
          numbers.map( (num, key) => <li key={key}>{num}</li>)
        }
      </ul>
      <input type="text" value={input} 
        onChange={event => setInput(event.target.value)}/>
      <button onClick={setNewNumber}>Add Number</button>
      <button onClick={remove}>Remove last number</button>
    </div>
  )
}

export default Adder