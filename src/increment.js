import React,{useState} from 'react'
import './App.css'



const Increament = () =>{
    const [count,setCount] =useState(0);
    const [isBlue,setBlue] =useState(false)


    const increament = () =>{
        setCount(count + 1);
        setBlue(!isBlue)
    }
    

    
    return(
        <div>
           
        </div>
    )
}

export default Increament;