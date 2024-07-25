import React, { Component } from 'react';  
class App extends Component{  
  constructor(props) {
    super(props)
    this.state = {
       name : "Dr. Poornima G. Naik",
       designation : "Professor, School of Computer Science and Applications",
       institute: "CSIBER, Kolhapur"
    }
    this.changeHandler = this.changeHandler.bind(this);  
  }
  changeHandler(){
   this.setState({
      name:"Dr.P.G.Naik",
      designation:"Professor",
      institute:"CSIBER"
   }
   )
  }
  render(){     
      return (  
         <div>  
            <h1><font color='blue'>Profile : </font></h1> 
            <h2>Name : {this.state.name}</h2>
            <h2>Designation : {this.state.designation}</h2>
            <h2>Institute : {this.state.institute}</h2>
            <button onClick={this.changeHandler}>Change Name</button>
         </div>  
      );  
   }  
}  
export default App;