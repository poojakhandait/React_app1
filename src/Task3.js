import React from 'react'
import A from './A'
import Ct from './Ct'

const Task3=()=>
 {
  let name='Ramu'
  return (
    <Ct.Provider value={{"name":name}}>
      <A/>
    </Ct.Provider> 
     )
}

export default Task3