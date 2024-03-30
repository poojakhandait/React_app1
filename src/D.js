
import { useContext } from 'react'
import Ct from './Ct'

const D=()=> {
    let obj=useContext(Ct)
  return (
    <div>
        Welcome to Mr/Mrs{obj.name}
    </div>
  )
}

export default D