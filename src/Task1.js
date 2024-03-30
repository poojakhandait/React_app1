import React, { useState } from 'react'

export const Task1 = () => {
  let [data,setData]=useState([])
  let [obj,setObj]=useState({"uid":"","email":"","task":"","dl":""})
  let [f,setF]=useState(true)
  let [ind,setInd]=useState(0)
  let fun=(e)=>{
    setObj({...obj,[e.target.name]:e.target.value})
  }
  let add=()=>{
    setData([...data,obj])
  setObj({"uid":"","email":"","task":"","dl":""})
    

  }
  let del=(i)=>{
    data.splice(i,1)
    setData([...data])

  }
  let edit=(i)=>{
    setObj(data[i])
    setF(false)
    setInd(i)
  }
   let update=()=>{
    data[ind]=obj
    setData([...data])
    setF(true)
    setObj({"uid":"","email":"","task":"","dl":""})
   }
  return (
    <div>
    <input type='text' placeholder='enter Uid' name='uid' onChange={fun} value={obj.uid}/>
    <input type='text' placeholder='enter email' name='email' onChange={fun} value={obj.email}/>
    <input type='text' placeholder='enter task' name='task' onChange={fun} value={obj.task}/>
    <input type='date' placeholder='enter dedline' name='dl' onChange={fun} value={obj.dl}/>
   {f&& <button onClick={add}>Add</button>}
   { !f&& <button onClick={update}>Update</button>}
{data.length>0&&<table border={1}>
      <tr><th>Uid</th><th>Email</th><th>Task</th><th>Dedline</th></tr>

{
  data.map((item,i)=>{
    return(<tr>
      <td>{item.uid}</td>
      <td>{item.email}</td>
      <td>{item.task}</td>
      <td>{item.dl}</td>
      <td><button onClick={()=>edit(i)}>Edit</button></td>
      <td><button onClick={()=>del(i)}>Delet</button></td>
    </tr> )
  } )
}
    </table>
}

    </div>
  )
}
export default Task1
