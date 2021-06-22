import React from 'react'
import Increament from './increment';

 class Classcounter  extends React.Component {
     constructor(props){
         super(props);
         this.state = {count : 0}


        };


        increase = () =>{
            if (this.state.count < 10){
                this.setState({count : this.state.count + 1})
            }
           };

        decrease = () =>{
            if (this.state.count > 1){
                this.setState({count : this.state.count - 1})
            }
           };


     render(){
         return  <div className='tweet'>
             <p>class component</p>
            <h4>{this.state.count}</h4>
            <button onClick={this.increase}>likes</button>
            <button onClick={this.decrease}>unlike</button>
            <h3>Number of likes</h3>
            
        </div>


         
     }
 }
   
export default Classcounter
