import axios from 'axios'
import {useEffect,useState} from 'react'
import './Task2.css'
const Task2 = () => {
  let [data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://dummyjson.com/products").then((res)=>{
      setData(res.data.products)
    })
  },[])
  return(
    <div className='con'>
      {
        data.map((item)=>{
          return(<div className='prod'>
            <div className='img'>
              <img src={item.images[0]}/>
            </div>
            <p>Name:{item.title}</p>
            <p>Description:{item.description}</p>
            <p>Price:{item.price}</p>
            <p>Rating:{item.rating}</p>
            <p>Category:{item.category}</p>
            <button>Add To Card</button>
          </div>)
        })
      }
    </div>
  )
  
}
export default Task2