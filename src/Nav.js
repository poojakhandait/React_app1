import { Link } from "react-router-dom";
import React from 'react'
import "./Nav.css"

const Nav=()=> {
  return (
    <div className="nav">
        <Link to='/'>Home</Link>
        <Link to='/task1'>Task1</Link>
        <Link to='/task2'>Task2</Link>
        <Link to='/task3'>Task3</Link>
        
    </div>
  )
}

export default Nav