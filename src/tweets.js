import React,{useState} from 'react'
import Increament from './increment'
// import {increament} from './increment'


 const Tweets = ({name,message}) => {


     
     const [count, setCount] = useState(0)
     const [isBlue,setBlue] = useState(false)


     const increament = () =>{
        if (count < 10){
            setCount(count + 1);
        }
        //  setBlue(!isBlue)
     }
     const decrease = () =>{
        if (count > 0){
            setCount(count - 1);
        }
        //  setBlue(!isBlue)
     }



    return (
        <div className='tweet'>
            {/* <h3 className={isBlue ? 'blue' :'purple'}>{name}</h3> */}
            <p>{message}</p>
            <h4>{count}</h4>
            <button onClick={increament}>likes</button>
            <button onClick={decrease}>unlike</button>
            <h3>Number of likes</h3>
        </div>
    )
}

export default Tweets
