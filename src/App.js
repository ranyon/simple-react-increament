// import logo from './logo.svg';
import React ,{useState} from 'react';
import './App.css';
import Tweets from './tweets'
import Increament from './increment'
import Classcounter from './classcounter'

function App() {
 const [isUsers, setUsers] = useState([
  {name:'', message:'Dy Func tweet'}
  
 ])



  return(
    <div >
      <br />
      <div className='app'>
    {isUsers.map(isUsers =>(
      <Tweets name={isUsers.name} message={isUsers.message}/>
    ))}
    <Classcounter/>
      </div>
    </div>
    
  )

}

export default App;
